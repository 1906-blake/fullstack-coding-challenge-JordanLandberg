package com.revature.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.GroceryItem;
import com.revature.models.GroceryList;

public interface GroceryItemRepository extends JpaRepository<GroceryItem, Integer> {

	List<GroceryItem> findByGroceryListGroceryListId(int id);

	void deleteByGroceryList(GroceryList deletedList);

}
