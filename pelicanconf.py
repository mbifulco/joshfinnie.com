#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Josh Finnie'
DESCRIPTION = u"Josh Finnie's blog about programming and stuff"
SITENAME = u'JoshFinnie.com'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/New_York'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

DEFAULT_PAGINATION = 5

STATIC_PATHS = ['assets']

TEMPLATE_PAGES = {
    'extra/robots.txt': 'robots.txt',
    'extra/humans.txt': 'humans.txt',
    'articles.html': 'blog/index.html',
}

READERS = {'html': None}

ARTICLE_EXCLUDES = (('pages', 'extra', 'drafts', 'talks'))
STATIC_PATHS = [
    'talks',
]

ARTICLE_URL = 'blog/{slug}/'
ARTICLE_SAVE_AS = 'blog/{slug}/index.html'
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'
CATEGORY_URL = 'category/{slug}/'
CATEGORY_SAVE_AS = 'category/{slug}/index.html'
TAG_URL = 'tag/{slug}/'
TAG_SAVE_AS = 'tag/{slug}/index.html'
AUTHOR_URL = 'author/{slug}/'
AUTHOR_SAVE_AS = 'author/{slug}/index.html'

THEME = "theme"

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
