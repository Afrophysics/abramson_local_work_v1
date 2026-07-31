# This is a test
import numpy as np
import pandas as pd
import matplotlib as plt
import requests as rq
import pyspark as pk
import scipy as sp
import Flash as fk


#Build fetcher, data parser, and transform
api_url=     #API URL here
auth_key=      #API key value here
auth_token=     #APi Auth Token here

def res(act, api_url, auth_key, auth_token):
   req=api_url+'?'+'token='+auth_token
   req_act= rq(act, req)
   return req_act
 

