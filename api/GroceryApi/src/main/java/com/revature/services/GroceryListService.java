package com.revature.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.GroceryItem;
import com.revature.models.GroceryList;
import com.revature.repositories.GroceryItemRepository;
import com.revature.repositories.GroceryListRepository;

@Service
public class GroceryListService {

    @Autowired
    private GroceryListRepository glr;

    @Autowired
    private GroceryItemRepository gir;

    public List<GroceryList> findAll() {
    	return glr.findAll();
//        return glr.findAllOrderByGroceryListId();
    }

    public GroceryList createList(GroceryList newList) {
        return glr.saveAndFlush(newList);
    }

    @Transactional
    public GroceryItem addItemToList(int groceryListId, GroceryItem newItem) {
        GroceryList groceryList = glr.getOne(groceryListId);
        newItem.setGroceryList(groceryList);
        GroceryItem gi= gir.saveAndFlush(newItem);
        return gi;
    }

    @Transactional
    public void removeItemFromList(int groceryListId, int itemId) {
    	GroceryItem deletedItem = gir.getOne(itemId);
    	gir.delete(deletedItem);
    }

    @Transactional
    public void removeList(int groceryListId) {
        GroceryList deletedList = glr.getOne(groceryListId);
        gir.deleteByGroceryList(deletedList);
        glr.delete(deletedList);
        
    }

}
