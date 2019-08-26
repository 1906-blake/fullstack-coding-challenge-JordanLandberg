package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "grocery_list")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class GroceryList {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "grocery_list_id")
	private int groceryListId;
	
	@Column(name = "grocery_list_name")
	private String name;

	@Column(name = "grocery_list_description")
	private String description;

	public GroceryList() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GroceryList(int groceryListId, String name, String description) {
		super();
		this.groceryListId = groceryListId;
		this.name = name;
		this.description = description;
	}

	public int getGroceryListId() {
		return groceryListId;
	}

	public void setGroceryListId(int groceryListId) {
		this.groceryListId = groceryListId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + groceryListId;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		GroceryList other = (GroceryList) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (groceryListId != other.groceryListId)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "GroceryList [groceryListId=" + groceryListId + ", name=" + name + ", description=" + description + "]";
	}

	
}
