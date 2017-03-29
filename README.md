# sequelizedburger
# Week 15 Assignment - Burger 2: The Sequel!

### Overview
In this assignment, I've added Sequelize to the `Burger` app I made previously. 


#### Tier 1: Sequelized! (Basic to Moderate)

* Removed all references to my vanilla MySQL queries and replaced them with Sequelize queries.

* That means:
	* Replaced MySQL `Burger` model with a Sequelized equivalent.
		
	* Edited the new `config.json` file to include my database configurations. Placed  JawsDB details in the `production` property of your json file; the details of your local database go in the `developer` property.

	* Remove old ORM file, as well as any references to it in `burgers_controller.js`. Replace those references with Sequelize's ORM methods.

	
	


#### Tier 2: Customer Associations 

* Added a Customer association to this project. 

* Customer can add multiple burgers


	

* If you do go select this tier, you must edit the handlebars files and CSS stylesheets to implement some sort of additional feature to the site. We don't want you to just connect two models and submit your project. Make your site do something relevant to this association.


* Validations for models:
	* A burger's name cannot be null
	* A burger's devoured status is false by default
	* A Customer's name cannot be null

* Order the Burgers you send back to the user in alphabetical order using the Sequelize "order" option.

-------
### Author

Megan Liken