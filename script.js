//? A rather inefficient way of doing this, but it works well enough. PS: I wanted to put all this in the html but the did'nt like that

function bone() { // Changing background and text contents
    document.getElementById("body").style.backgroundImage = "url(bgs/bg1.jpg)";
    updateContent(
        "Infrastructure", 
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, "+
        "to support economic development and human well-being, with a focus on affordable and equitable access for all. Infrastructure "+
        "is often seen as a prerequisite to economic development and is even defined as the “basic physical and organizational structures "+
        "and facilities (e.g. buildings, roads, power supplies) needed for the operation of a society or enterprise.” In other words, without "+
        "infrastructure, the operation of a society or enterprise cannot happen. This underscores the importance of infrastructure investments. "+
        "But infrastructure isn’t free, and it doesn’t come cheap. And in fact, many infrastructure projects."); //* Funny text
}

function btwo() {
    document.getElementById("body").style.backgroundImage = "url(bgs/bg2.jpg)";
    updateContent(
        "Industrialization",
        "Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry’s share of employment and gross "+
        "domestic product, in line with national circumstances, and double its share in least developed countries.Industrialization is the "+
        "process by which an economy is transformed from a primarily agricultural one to one based on the manufacturing of goods. Individual "+
        "manual labor is often replaced by mechanized mass production, and craftsmen are replaced by assembly lines.Examples of industrialization "+
        "are manufacturing (1900s), mining (1930s), transportation (1950s), and retailing (1970s).");
}

function bthree() {
    document.getElementById("body").style.backgroundImage = "url(bgs/bg3.jpg)";
    updateContent(
        "Innovation", 
        "Facilitate sustainable and resilient infrastructure development in developing countries through enhanced financial, technological "+
        "and technical support to African countries, least developed countries, and landlocked developing countries.Innovation is defined as "+
        "the process of making an idea or invention into a good or service that creates value and/or for which customers will pay. There are many "+
        "different types of examples of innovation such as social innovation examples, incremental innovation examples and open innovation examples among others.");
}

function bfour() {
    document.getElementById("body").style.backgroundImage = "none";
    updateContent(
        "Extra", 
        "The Sustainable Development Goals or Global Goals are a collection of 17 interlinked global goals designed to be a 'blueprint to achieve "+
        "a better and more sustainable future for all'. The SDGs were set up in 2015 by the United Nations General Assembly and are intended to be achieved by 2030");
}

function updateContent(title, content) { // Helper function to change text contents, thinking about it i couldve added a third parameter for the background
    document.getElementById("tit").innerHTML = title;
    document.getElementById("par").textContent = content;
}

document.addEventListener('DOMContentLoaded', init, false); //The script was loading before the image so this works around that

function init() { 
    document.getElementById("ball").addEventListener("click", () => { //Making it so that when you click the icon it brings you back to the home
        updateContent(
            "Welcome!", 
            "This website's purpose is explaining the 9th sustainable development goal. Click the buttons above to learn more or click the icon to come back here.");
        document.getElementById("body").style.backgroundImage = "url(bgs/bg0.jpg)";
    })
}
function trollMe(){
    document.getElementById("body").style.backgroundImage = "url(bgs/trollface.png)";
}