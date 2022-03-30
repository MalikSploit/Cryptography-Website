#!/usr/bin/python3
# -*- coding: utf-8 -*-

import cgi
import cgitb
import os
import string
import hashlib
import pickle


cgitb.enable()

print('Cache-Control: no-cache')
print('Content-type: text/plain; charset=utf-8')
print('')


data_file = open('../data/user.dat','rb')
data = pickle.loads(data_file.read())
data_file.close()


form_data = dict()

form = cgi.FieldStorage()
for name in list(form.keys()):
	if name.lower() == 'userpwd':
		form_data[name] = hashlib.sha512(form.getfirst(name).encode('utf-8')).hexdigest()
	else:
		form_data[name] = form.getfirst(name)


if not 'username' in form_data:
	print('Username must not be empty !')
elif not 'userpwd' in form_data:
	print('Password must not be empty !')
elif form_data['username'] == data['username'] and form_data['userpwd'] == data['userpwd']:
	print(("Welcome back, %s %s !" % (data['firstname'], data['lastname'])))
else:
	print('The username and the password are incorrect !')

