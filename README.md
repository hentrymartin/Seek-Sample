# Seek web app sample


## Steps To Install

## Backend Setup

I've used json-server to serve customers, plans and discounts values
```
### npm install -g json-server
### json-server --watch jsons/db.json --port 3004
```
This runs the resource server

Now, you can access the resources in localhost:3004

## FrontEnd Setup
```
### npm install
### npm start
### go to localhost:8080
```


## FrontEnd Stack

```
	React V16.0.00
	Redux
	Router V4
	Jest
	Babel for transpiling
	Webpack for bundling
```

## Explanation for discount object

Following is a sample discount object

```
			{
				"display": "Gets a “3 for 2” deal on Classic Ads",
				"discountRate": 0.6666666666666666,
				"minItems": 3,
				"isClustered": true,
				"planId": "Classic"
			}
```

display - The string to show in the front end application

discountRate - The percentage rate to multiply with the original price to get the discounted price

```
A simple calculation is 
original - 26999
offer is 3 items for the price of 2 - which means that (2/3 of original price) * quantity
so discountRate will be 2/3 ie 0.6666666666666666
```

minItems - The minimum items to be added to apply this rule

isCluster - It is true if the discount to be applied to the divisable of minItems i.e 3 for 2 is applicable for a cluster of three items. If the customer has choosen 7 products then the discount will be applicable for 6 items and the remaining item will be charged with original price.
planId - The plan id the discount is applicable to

New routes can be added in this application in AppWrapper/index.js, for now it contains only one route(ie base route)

Written some test cases just for demo

To run test cases,

npm run test

