package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.GroceryItem;
import com.revature.repositories.GroceryItemRepository;

@Service
public class GroceryItemService {
	
	@Autowired
	private GroceryItemRepository gir;

	public List<GroceryItem> findAll() {
		return gir.findAll();
	}

	public List<GroceryItem> findByGroceryList(int id) {
		return gir.findByGroceryListGroceryListId(id);
	}

}
