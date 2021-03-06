var Rating = require('../models/Rating');

exports.create_rating = function(req, res) {
    var new_rating = new Rating(req.body);

    Rating.createRating(new_rating, function(err, rating) {
        if (err)
          res.send(err);
        res.json(rating);
    });
};

exports.add_rating = function (req, res) {
  Rating.addRating(req.body.rate, req.body.comment, req.params.uid, function(err, rating) {
      if (err)
        res.send(err);
      res.json(rating);
  });
};

exports.delete_rating = function (req, res) {
  Rating.deleteRating(req.params.ratingId, function(err, rating) {
      if (err)
        res.send(err);
      res.json(rating);
  });
};

exports.get_rating_by_id = function (req, res) {
    Rating.getRatingById(req.params.ratingId, function(err, rating) {
        if (err)
          res.send(err);
        res.json(rating);
    });
};

exports.get_rating_by_uid = function (req, res) {
  Rating.getRatingByUid(req.params.uid, function(err, rating) {
      if (err)
        res.send(err);
      res.json(rating);
  });
};

exports.get_users_with_min_rating = function (req, res) {
  Rating.getUsersWithMinRating(req.params.minRating, function (err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
}

exports.get_all_ratings = function (req, res) {
    Rating.getAllRatings(function(err, rating) {
        if (err)
          res.send(err);
        res.json(rating);
    });
};
