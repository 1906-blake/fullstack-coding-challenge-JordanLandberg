package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.GroceryItem;
import com.revature.models.GroceryList;
import com.revature.services.GroceryListService;

@RestController
@RequestMapping("/grocery-lists")
public class GroceryListController {

	@Autowired
	private GroceryListService gls;

	@GetMapping // Find all Grocery Lists
	public List<GroceryList> findAll() {
		return gls.findAll();
	}

	@PostMapping // Create new Grocery List
	public GroceryList createList(@RequestBody GroceryList newList) {
		return gls.createList(newList);
	}

	@PostMapping(value = "/{groceryListId}/items") // Create new item for a list
	public GroceryItem addItemToList(@PathVariable int groceryListId, @RequestBody GroceryItem newItem) {
		GroceryItem gi = gls.addItemToList(groceryListId, newItem);
		return gi;
	}

	@DeleteMapping(value = "/{groceryListId}/items/{itemId}") // Delete item from list
	public void removeItemFromList(@PathVariable Integer groceryListId, @PathVariable int itemId) {
		gls.removeItemFromList(groceryListId, itemId);
	}

	@DeleteMapping(value = "/{groceryListId}")
	public void removeList(@PathVariable int groceryListId) {
		gls.removeList(groceryListId);
	}

}
