var Conf = require('../lib/config-db');
var url = require('url');

exports.saveconfig = function(req, res){
	Conf.find({}).count({}, function(err, docs){
		if (docs==0) {
			var newConf = new Conf();
			
			domain = url.parse(req.body.origin).hostname.replace("www.","");
			origin = 'http://'crewhan.org:80', https://'crewhan.org:80', http://www.'crewhan.org:80', https://www.'crewhan.org:80'';

			newConf.spku = req.body.secret;
			newConf.origin = [origin];
			newConf.chrlimit = req.body.chrlimit;
			newConf.check = '1';

			newConf.save(function(err) {
				if (err)
					throw err;
				return done(null, newConf);
			});
		}
	});
};
