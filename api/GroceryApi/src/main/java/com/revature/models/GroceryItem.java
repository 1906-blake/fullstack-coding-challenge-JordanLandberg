package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "grocery_item")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class GroceryItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "grocery_item_id")
	private int groceryItemId;
	
	@Column(name = "grocery_item_name")
	private String groceryItemName;

	@Column(name = "grocery_item_type")
	private String groceryItemType;
	
	@ManyToOne
	@JoinColumn(name="grocery_list_id")
	private GroceryList groceryList;

	public GroceryItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GroceryItem(int groceryItemId, String groceryItemName, String groceryItemType, GroceryList groceryList) {
		super();
		this.groceryItemId = groceryItemId;
		this.groceryItemName = groceryItemName;
		this.groceryItemType = groceryItemType;
		this.groceryList = groceryList;
	}

	public int getGroceryItemId() {
		return groceryItemId;
	}

	public void setGroceryItemId(int groceryItemId) {
		this.groceryItemId = groceryItemId;
	}

	public String getGroceryItemName() {
		return groceryItemName;
	}

	public void setGroceryItemName(String groceryItemName) {
		this.groceryItemName = groceryItemName;
	}

	public String getGroceryItemType() {
		return groceryItemType;
	}

	public void setGroceryItemType(String groceryItemType) {
		this.groceryItemType = groceryItemType;
	}

	public GroceryList getGroceryList() {
		return groceryList;
	}

	public void setGroceryList(GroceryList groceryList) {
		this.groceryList = groceryList;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + groceryItemId;
		result = prime * result + ((groceryItemName == null) ? 0 : groceryItemName.hashCode());
		result = prime * result + ((groceryItemType == null) ? 0 : groceryItemType.hashCode());
		result = prime * result + ((groceryList == null) ? 0 : groceryList.hashCode());
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
		GroceryItem other = (GroceryItem) obj;
		if (groceryItemId != other.groceryItemId)
			return false;
		if (groceryItemName == null) {
			if (other.groceryItemName != null)
				return false;
		} else if (!groceryItemName.equals(other.groceryItemName))
			return false;
		if (groceryItemType == null) {
			if (other.groceryItemType != null)
				return false;
		} else if (!groceryItemType.equals(other.groceryItemType))
			return false;
		if (groceryList == null) {
			if (other.groceryList != null)
				return false;
		} else if (!groceryList.equals(other.groceryList))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "GroceryItem [groceryItemId=" + groceryItemId + ", groceryItemName=" + groceryItemName
				+ ", groceryItemType=" + groceryItemType + ", groceryList=" + groceryList + "]";
	}

}
