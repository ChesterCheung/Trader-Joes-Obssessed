
puts "Seeding"

user1 = User.create!(username: "chester", password: "123")
user2 = User.create!(username: "melinda", password: "123")
user3 = User.create!(username: "simon", password: "123")

location1 = Location.create!(neighborhood: "Downtown Brooklyn", city: "Brooklyn" )
location2 = Location.create!(neighborhood: "Union Square", city: "Manhattan" )
location3 = Location.create!(neighborhood: "Williamsburg", city: "Brooklyn" )
location4 = Location.create!(neighborhood: "Forrest Hills", city: "Queens" )

product1 = Product.create!(name: "Salsa Verde Flavored Corn Chips", category: "Snacks", price: 3, location_id: location1.id, url: "https://www.traderjoes.com/content/dam/trjo/products/m21001/73152.png/jcr:content/renditions/webp-1280.webp")
product2 = Product.create!(name: "Onion Rings", category: "Frozen Food", price: 6, location_id: location2.id, url: "https://www.traderjoes.com/content/dam/trjo/products/m21001/72136.png/jcr:content/renditions/webp-1280.webp")
product3 = Product.create!(name: "Almond Butter Filled Pretzel Nuggets", category: "Snacks", price: 6, location_id: location3.id, url: "https://www.traderjoes.com/content/dam/trjo/products/m21001/70721.png/jcr:content/renditions/webp-1280.webp")
product4 = Product.create!(name: "Habanero Hot Sauce ", category: "Condiments", price: 3, location_id: location4.id, url:"https://www.traderjoes.com/content/dam/trjo/products/m21002/74627.png/jcr:content/renditions/webp-1280.webp")
product5 = Product.create!(name: "Organic Cacio E Pepe Puffs", category: "Snacks", price: 4, location_id: location1.id, url: "https://www.traderjoes.com/content/dam/trjo/products/m21001/71323.png/jcr:content/renditions/webp-1280.webp")

review1 = Review.create!(comments: "Crazy addictive, so good", rating: 5, user_id: user1.id, product_id: product1.id)
review2 = Review.create!(comments: "Good, but the icing is too sweet", rating: 3, user_id: user1.id, product_id: product3.id)
review3 = Review.create!(comments: "So so good", rating: 5, user_id: user2.id, product_id: product2.id)
review4 = Review.create!(comments: "It was so good!", rating: 4, user_id: user2.id, product_id: product3.id)
review5 = Review.create!(comments: "Too spicy for me", rating: 1, user_id: user3.id, product_id: product4.id)
review6 = Review.create!(comments: "Regular fish sticks", rating: 2, user_id: user1.id, product_id: product2.id)
review6 = Review.create!(comments: "Tastes so good", rating: 4, user_id: user2.id, product_id: product5.id)
review6 = Review.create!(comments: "meh, hot sauce is decent", rating: 3, user_id: user2.id, product_id: product4.id)
review6 = Review.create!(comments: "It was okay", rating: 3, user_id: user3.id, product_id: product3.id)

productLocation1 = ProductLocation.create!(product_id: product1.id, location_id: location1.id)

puts "Done Seeding"