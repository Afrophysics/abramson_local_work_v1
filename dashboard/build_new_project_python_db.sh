#!/bin/bash

#Create Build files for our subdirectories

mkdir -p "$1"

cat <<EOF > "$1"/README.md
# "$2" 
### By "$USER"
## Introduction (What is this?)
===
## Capabilities, qualities, functionality (How does it?)
===
## Any comments/concerns please reach out to 
===
EOF

mkdir -p "$1"/test_env;

cat <<EOF > "$1"/test_env/py_modules.py
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
 

EOF

cat <<EOF > "$1"/test_env/dummi_database_builder.py

#We will be building a dataframe to push into our dashboard
import numpy as np
import pandas as pd


#np.random.seed(123)

action_uuid_lis=['13un4la', '53jma1l', 'n98lanf','9ff4j9g', 'afd901f9', 'fgh456f']
client_matter_name = {'13un4la':'Eduardo Solis', '53jma1l':'Marta Croft', 'n98lanf':'Sussana Belcher','9ff4j9g':'James Otto', 'afd901f9':'Hector Dunn', 'fgh456f':'Mercedez Freeman'}
data_collection_records=['195--date_retainer_signed', '195--date_wc_retainer_signed', '208--date_informed_client_of_referral', '504--date_created','523--date_completed_intake_step', '523--final_lit_decision_moved_to', '523--send_demand_moved_to', '140--date_accepted_offer','140--accepted_offer','140--alg_share_not_factoring_disbursement', '140--amount_recieved']

def rand_date(num):
   return np.random.choice([00:43:34, 00:24:44, 12:42:21, 06:34:51, 14:55:01],size=num)

settlement_matter_accepted= {'140--accepted_offer_13un41a':120000.00, '140_accepted_offer_53jma1l':240000.00, '140--accepted_offer_n98lanf':0.00,'140--accepted_offer_9ff4j9g':0.00, 'afd901f9':0.00, 'fgh456f':90000.00}

ind_num=20
df_actions=pd.DataFrame({'a':range(ind_num)})
matter_chng=np.random.choice(action_uuid_lis, size=ind_num)
matter_chng_lis=np.ndarray_tolist(matter_chng)

client_name=[]
settlement_date=rand_date(ind_num)
settlement_accepted=[]

for ss in matter_chng_lis:
   client_name.append(client_matter_name[ss])
   settlement_accepeted.append(settlement_matter_accepted[data_collection_records[-3]+'_'+ss])
   
df_actions['Client_name']=client_name
df_actions['Action id']=matter_chng
df_actions['settlement_date']=settlement_date
df_actions['settlement_accepted']=settlement_accepted

#Include Supabase Postgresql account connection under here to send to Supabase via sqlalchemy
###





  

