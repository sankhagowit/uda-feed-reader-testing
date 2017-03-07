/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
			it('each feed has a url', function() {
				allFeeds.forEach(function(feed){
					expect(feed.url).toBeDefined();
					expect(feed.url.length).not.toBe(0);
				});
			});


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
			it('each feed has a name', function() {
				allFeeds.forEach(function(feed){
					expect(feed.name).toBeDefined();
					expect(feed.name.length).not.toBe(0);
				})
			});
    });


    /* TODO: Write a new test suite named "The menu" */
	 describe('The menu', function(){

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
		it('is hidden by default', function() {
			// expect the class of slide-menu to contain menu-hidden on the load of the page.
			//I think I can do this by checking on load that the body has the class menu hidden.
			// figure out how to check the class status of a dom element using jasmine.
		});
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		 it('displays when clicked', function() {
			//expect if the body has the class menu-hidden on the click of the button/link menu-icon-link/ the i element of the class icon-list that the body loses/does not have the class menu-hidden anymore
		 });

		 it('hides when clicked again', function() {
			//expect if the body does not have the class menu-hidden on the click of the button/link menu-icon-link/the i element of the class icon-list that the body gains the the class menu-hidden
		 });
	 });
    /* TODO: Write a new test suite named "Initial Entries" */
	 describe('Initial Entires', function(){

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

			// go to notes and find how to do the async javascript test..
			// after loadFeed completes, expectation that the div which has the class feed has at least one child which contains an article with the class entry... that is how I think it would be represented...
			// expect(feed.name.length).not.toBe(0) ... hmm I dont think I can reuse this expectation which is checking the length of an array. yeah, thats not going to work, I've got a feeling this will involve some sort of DOM crawling using jquery then a jasmine function to check the class of the available children.
			it('has at least a single .entry element within .feed container', function(){

			});
	});

    /* TODO: Write a new test suite named "New Feed Selection" */
	 describe('New Feed Selection', function(){

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		it('Changes Content', function(){
			// clearly the trickiest of the tests... it has to have some way to determine that the content in the .feed div changes when a link in the slide-menu is clicked... need to read up on jasmine documentation.
		});
	 });
}());
