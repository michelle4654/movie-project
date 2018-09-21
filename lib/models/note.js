'use strict';

module.exports = (sequelize, DataTypes) => {
  let Movie = sequelize.define('Movie', {
    IMDBPage: DataTypes.STRING,
    Description: DataTypes.STRING,
    RottenTomatoesPage: DataTypes.STRING,
    Title: DataTypes.STRING,
    VenueS: DataTypes.STRING,
    Image: DataTypes.STRING

  });

  return Movie;
};
