/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title: 'Ueaac'
	});
};

exports.pageNotFound = function(req, res) {
	res.render('404', {
		title: 'Page Not Found!'
	})
};