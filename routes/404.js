/*
 * GET 404 page.
 */
exports.pageNotFound = function(req, res) {
	res.render('404', {
		title: 'Page Not Found!'
	})
};