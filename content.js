function removePromotedTweets() {
    const tweetDivs = document.querySelectorAll('div[data-testid="cellInnerDiv"]');
  
    tweetDivs.forEach((tweetDiv) => {
      const promoted = Array.from(tweetDiv.getElementsByTagName('span')).some((span) => {
        return span.textContent === "Promoted";
      });
  
      if (promoted) {
        tweetDiv.style.display = 'none';
      }
    });
  }
  
  // Run the function initially and set an interval to keep checking for new promoted tweets
  removePromotedTweets();
  setInterval(removePromotedTweets, 1000);