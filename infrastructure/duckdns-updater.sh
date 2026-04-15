#!/bin/bash

# Configuration: Replace these with your actual Duck DNS domain and token
DOMAIN="YOUR_DOMAIN" # e.g. "myproject" if your domain is myproject.duckdns.org
TOKEN="YOUR_TOKEN"

# Log file wrapper
echo url="https://www.duckdns.org/update?domains=$DOMAIN&token=$TOKEN&ip=" | curl -k -o /var/log/duckdns/duck.log -K -
