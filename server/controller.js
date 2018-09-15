const {Cake, Review} = require('./model');

// export an obj that contains the logics
module.exports = {
    allCakes: (req, res) => Cake.find({})
                                .then(cakes => console.log("Get all cakes", cakes) || res.json(cakes))
                                .catch(errs => console.log("Can't get all cakes", errs) || res.json(errs)),
    getCake: (req, res) => Cake.findById(req.params.id)
                               .then(cake => console.log("Here's the cake", cake) || res.json(cake))
                               .catch(errs => console.log("Can't get the cake", errs) || res.json(errs)),
    createCake: (req, res) => Cake.create(req.body)
                                  .then(newCake => console.log("Make a new cake", newCake) || res.json(newCake))
                                  .catch(errs => console.log("Fail to bake the cake", errs) || res.json(errs)),
    deleteCake: (req, res) => Cake.findByIdAndRemove(req.params.id)
                                  .then(deletedCake => console.log("The cake is deleted!", deletedCake) || res.json(deletedCake))
                                  .catch(errs => console.log("Fail to delete cake", errs) || res.json(errs)),
    reviewCake: (req, res) => {Review.create(req.body).then(review => {
                                //   console.log("Review is created at the backend", review) || res.json(review),
                                  Cake.findByIdAndUpdate(req.params.id, { $push: {review: req.body} })
                                    .then(review => console.log("You add a review!", review) || res.json(review))
                                    .catch(errs => console.log("Fail to add the review", errs) || res.json(errs)),
                                  console.log("Review is created at the backend", review) || res.json(review)
                                })
                                .catch(errs => console.log("Erros at the backend", errs) || res.json(errs))}

}