# TealHeartCoinhive
## Coinhive.com - Heart button.
### Coinhive component app for donation mining

#### 1.Project
 * Project created as legacy... some people will like to have it
 * Why it created, which problems solved: easy to implement, donation button.

 ![Screenshot](https://github.com/BrotherhoodOfEden/TealHeartCoinhive/blob/master/Screenshot.png "screenshot TealHeartCoinhive.png")

 * For use copy in your project this files:`Heart.js, Heart.css`
 change in `Heart.js` follow:
  ```javascript
  // change values below only
  var sitekey = "xWNlzvozz2enW0AB9fOsKtS3AJgR0xJn";
  var name = "Test";
  // change values above
  ```
  
  and copy your HTML component snippet:

  ```HTML
  <!-- copy class start-->
  <form class="don-container" action="index.html" method="post">
  <fieldset>
    <legend>Lovely Donation</legend>

    <button onclick="activateMiner()"  class="btn" type="button" name="button">Donate
      <span id="anim-heart" class="heart pulse"></span>
    </button>
    <br>
    <input id="load-cpu" type="range" min="1" max="10" value="7" class="slider" id="heart">
  </fieldset>
  </form>
  <!-- copy class end-->
  ```
#### 2. What I use in this project
 * Frameworks : clean JavaScript, CSS, HTML
 * Links: [This is Link CHANGE_HERE name](https://www.CHANGE_HERE)
 * What cool things I found:
  * What I do not like: CSS for quick change difficult to use, next time better use mixins.
  * Features: Cross platform button, accordingly standards.
#### 3. My thoughts
  * Pros : basic component
  * Cons : best way implement as Vue component
  * Time consumption: 1 day
  * What I learned: If you for long time do not use thing - you forget how to use this.

  Version: `0.2a`
  Date: `24.01.2018`
