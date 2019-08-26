package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.GroceryList;

public interface GroceryListRepository extends JpaRepository<GroceryList, Integer> {

//	List<GroceryList> findAllOrderByGroceryListId();

	void deleteByGroceryListId(int groceryListId);
}
