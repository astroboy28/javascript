/*
This is my 1st Homework for "Keeping Up With
the Javascripts - Part 1:ES6"
*/

var firstWord = "I";
var secondWord = "Remember";
var thirdWord = "You";
var songName = firstWord.concat(" ", secondWord, " ", thirdWord);

console.log(songName);

var songGenre = "rock";
var heavyMetal = true;
var bandName = "Skid Row";
var bandMembers = 5;
var membersName = ["Sebastian", "Snake", "Rachel", "Scotti", "Rob"]; // Sebastian's attitude got him replaced.
membersName[0] = "ZP Theart";


console.log(membersName);

var bandOrigin = {
  bandClass: "Awesome",
  yearFormed: 1986,
  town: "Toms River", 
  state: "New Jersey", 
  headBangLevel: function(){
    console.log("100%" + " " + this.bandClass)
  },
}

console.log(bandOrigin.headBangLevel());

function FavSong(songName, songGenre, heavyMetal, bandName){
    this.songName = songName;
    this.songGenre = songGenre;
    this.heavyMetal = heavyMetal;
    this.bandName = bandName;
    
}

var MyFavSong = new FavSong("I Remember You", "rock", true, "Skid Row");
console.log(MyFavSong);
