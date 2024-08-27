/**
 * -------------------
 * MongoDB
 * -------------------
 *
 * 1. Create Account
 * 2. Create An user with Password
 * 3. Whitelist IP Address
 * 4. Database > Connect > Driver > Node > View Full Code
 * 5. Change the password in the uri
 * --------------------
 * 1. CREATE ---> POST
 * 2. app.post("/users", async(req,res)=>{})
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. Access data from the body: const user = req.body
 * 6. Const result = await userCollection.insertOne(user)
 * 7. res.send(result)
 *
 * CLIENT
 * 1. Create fetch
 * 2. Add second parameter as an object
 * 3. Provide Method: "POST"
 * 4. Add headers: {"content-type" : "application/json"}
 * 5. Add body: JSON.stringify(user)
 *
 *
 * -------------------
 * READ MANY
 * -------------------
 * 1. Create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 *
 * -------------------
 * DELETE
 * -------------------
 * 1. create app.delete("/users/:id", async(req,res)=>{})
 * 2. specify unique ObjectId to delete the right user
 * 3. const query = {_id: new ObjectId(id)}
 * 4. const result = await userCollection.deleteOne(query)
 *
 */
