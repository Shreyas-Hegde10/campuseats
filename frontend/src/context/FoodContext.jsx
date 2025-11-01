import { createContext, useContext, useState } from "react"; 
import mockMenuItems from "../data/MockData.js";

const FoodContext = createContext(); 

export const useFood = () => {
  const context = useContext(FoodContext);
  if (!context) throw new Error("useFood must be used within FoodProvider");
  return context;
};


export const FoodProvider = ({ children }) => {
    const [userPreferences, setUserPreferences] = useState(() => {
        const savedPrefs = localStorage.getItem('userPreferences');
        return savedPrefs ? JSON.parse(savedPrefs) : null;
    }); 

    const [menuItems] = useState(mockMenuItems);
    const [swipeIndex, setSwipeIndex] = useState(0);
    const [swipeHistory, setSwipeHistory] = useState([]);

    const filteredItems = menuItems.filter(item => {
        if (!userPreferences) return true;

        // Price filter 
        if (item.price > userPreferences.maxPrice) {
            return false;
        }

        // Dietary restriction filter 
        if (userPreferences.dietaryRestrictions.length > 0) {
            for (let restriction of userPreferences.dietaryRestrictions) {
                if (!item.tags.includes(restriction)) {
                    return false;
                }
            }
        }
        return true; // Keep the item if all checks pass
    }); 
    const currentItem = filteredItems[swipeIndex]
    const hasMoreItems = swipeIndex < filteredItems.length - 1

    const savePreferences = (preferences)=>{
        setUserPreferences(preferences)
        localStorage.setItem('userPreferences',JSON.stringify(preferences))
        setSwipeIndex(0);
    } 

    const handleSwipe = (direction) =>{
        if (!hasMoreItems) return

        setSwipeHistory(prev => [...prev, {item:currentItem, direction}]) 

        if (hasMoreItems){
            setSwipeIndex(prev => prev + 1)
        }
    } 

    const resetSwipes = () =>{
        setSwipeIndex(0)
        setSwipeHistory([])
    } 

    const value = {
        userPreferences, 
        savePreferences, 
        currentItem, 
        hasMoreItems, 
        handleSwipe, 
        swipeHistory, 
        resetSwipes, 
        filteredItems, 
        swipeIndex, 
    } 
    
    return(
        <FoodContext.Provider value={value}>
            {children}
        </FoodContext.Provider>
    )
} 




