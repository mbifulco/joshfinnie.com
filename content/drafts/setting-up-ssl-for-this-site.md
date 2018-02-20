Title: Setting up SSL For This Site
Author: Josh Finnie
Date: 2018-02-09
Tags: SSL, S3, Cloudfront

```
$ brew install certbot
$ sudo certbot --manual -d www.joshfinnie.com
$ printf "%s" tsB2FrcPcMOKioWW0GntBNmoDdWYWza6ZzQKho-BInA.aDJP8zzxT-3iDyc8--NlWHBtjQXj3XWPm_NMnBaBlfM > /tmp/acme-challenge
$ aws --profile personal s3 cp /tmp/acme-challenge s3://www.joshfinnie.com/.well-known/acme-challenge/tsB2FrcPcMOKioWW0GntBNmoDdWYWza6ZzQKho-BInA --content-type text/plain
$ curl http://www.joshfinnie.com/.well-known/acme-challenge/tsB2FrcPcMOKioWW0GntBNmoDdWYWza6ZzQKho-BInA
$ sudo aws --profile personal iam upload-server-certificate \
    --server-certificate-name www.joshfinnie.com \
    --certificate-body file:///etc/letsencrypt/live/www.joshfinnie.com/cert.pem \
    --private-key file:///etc/letsencrypt/live/www.joshfinnie.com/privkey.pem \
    --certificate-chain file:///etc/letsencrypt/live/www.joshfinnie.com/chain.pem \
    --path /cloudfront/
```


Using Docker

```
$ sudo docker run -it --rm -p 443:443 -p 80:80 --name certbot \
    -v "/etc/letsencrypt:/etc/letsencrypt" \
    -v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
    certbot/certbot certonly
```
