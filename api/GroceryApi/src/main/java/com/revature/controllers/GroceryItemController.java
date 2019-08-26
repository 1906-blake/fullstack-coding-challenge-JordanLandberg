package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.GroceryItem;
import com.revature.services.GroceryItemService;

@RestController
@RequestMapping("/grocery-items")
public class GroceryItemController {

	@Autowired
	private GroceryItemService gis;

	@GetMapping
	public List<GroceryItem> findAllItems() {
		return gis.findAll();
	}

	@GetMapping(value = "/grocery-list/{id}")
	public List<GroceryItem> findByGroceryList(@PathVariable int id) {
		return gis.findByGroceryList(id);
	}

}
