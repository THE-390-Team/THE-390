# CondoCare
Welcome to CondoCare, a student project aimed at revolutionizing condo management! Dive into our platform designed to simplify condo living for residents and management alike. Explore our innovative features for effortless communication, swift maintenance requests, and vibrant community engagement. Join us as we redefine condo living one click at a time!

This repository was last updated Wed May  1 05:48:30 UTC 2024

## Visit our website at the following link:
[CondoCare Website](https://www.condocare.com)

## Reports Overviews

<details>
  <summary>Backend Coverage Report</summary>
  <pre>
Name                                                                                             Stmts   Miss  Cover
--------------------------------------------------------------------------------------------------------------------
core/__init__.py                                                                                     0      0   100%
core/settings.py                                                                                    41      0   100%
core/urls.py                                                                                         7      0   100%
finance/admin.py                                                                                     1      0   100%
finance/apps.py                                                                                      4      0   100%
finance/models.py                                                                                    5      1    80%
finance/views.py                                                                                    55     48    13%
jwt_auth_token/__init__.py                                                                           0      0   100%
jwt_auth_token/admin.py                                                                              1      0   100%
jwt_auth_token/apps.py                                                                               4      0   100%
jwt_auth_token/migrations/__init__.py                                                                0      0   100%
jwt_auth_token/models.py                                                                             1      0   100%
jwt_auth_token/tests.py                                                                              0      0   100%
jwt_auth_token/views.py                                                                             16      7    56%
manage.py                                                                                           12      2    83%
properties/__init__.py                                                                               0      0   100%
properties/admin.py                                                                                  6      0   100%
properties/apps.py                                                                                   4      0   100%
properties/migrations/0001_initial.py                                                                5      0   100%
properties/migrations/0002_initial.py                                                                6      0   100%
properties/migrations/0003_propertyprofile_fee_rate_and_more.py                                      4      0   100%
properties/migrations/0004_rename_propertyimage_propertyprofile_image.py                             4      0   100%
properties/migrations/0005_condounit_image_parkingunit_image_storageunit_image.py                    4      0   100%
properties/migrations/0006_condounit_operational_expense_and_more.py                                 4      0   100%
properties/migrations/0007_facility_reservation.py                                                   5      0   100%
properties/migrations/0008_delete_reservation.py                                                     4      0   100%
properties/migrations/__init__.py                                                                    0      0   100%
properties/models.py                                                                                68      6    91%
properties/serializers.py                                                                           39      5    87%
properties/tests.py                                                                                 26      0   100%
properties/urls.py                                                                                  13      0   100%
properties/views.py                                                                                 92     61    34%
registration_key/__init__.py                                                                         0      0   100%
registration_key/admin.py                                                                            5      0   100%
registration_key/apps.py                                                                             4      0   100%
registration_key/migrations/0001_initial.py                                                          7      0   100%
registration_key/migrations/0002_rename_is_activate_condoregistrationkey_is_active_and_more.py       5      0   100%
registration_key/migrations/__init__.py                                                              0      0   100%
registration_key/models.py                                                                          43      6    86%
registration_key/serializers.py                                                                     21      0   100%
registration_key/tests.py                                                                          177      0   100%
registration_key/urls.py                                                                             8      0   100%
registration_key/views.py                                                                          100      0   100%
reservation/__init__.py                                                                              0      0   100%
reservation/admin.py                                                                                 1      0   100%
reservation/apps.py                                                                                  4      0   100%
reservation/migrations/0001_initial.py                                                               6      0   100%
reservation/migrations/__init__.py                                                                   0      0   100%
reservation/models.py                                                                               14      1    93%
reservation/serializers.py                                                                           6      0   100%
reservation/tests.py                                                                                 1      0   100%
reservation/urls.py                                                                                  6      0   100%
reservation/views.py                                                                                20     11    45%
user_profile/__init__.py                                                                             0      0   100%
user_profile/admin.py                                                                                7      0   100%
user_profile/apps.py                                                                                 4      0   100%
user_profile/migrations/0001_initial.py                                                              8      0   100%
user_profile/migrations/__init__.py                                                                  0      0   100%
user_profile/models.py                                                                             102      6    94%
user_profile/serializers.py                                                                         38      0   100%
user_profile/tests.py                                                                               65      0   100%
user_profile/urls.py                                                                                14      0   100%
user_profile/views.py                                                                               97     63    35%
--------------------------------------------------------------------------------------------------------------------
TOTAL                                                                                             1194    217    82%
  </pre>
</details>


<details>
  <summary>Frontend Coverage Report</summary>
<pre>

=============================== Coverage summary ===============================
Statements   : 43.05% ( 533/1238 )
Branches     : 38.51% ( 218/566 )
Functions    : 46.12% ( 113/245 )
Lines        : 43.42% ( 525/1209 )
================================================================================
</pre>
  <pre>
------------------------------------|---------|----------|---------|---------|----------------------
File                                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s    
------------------------------------|---------|----------|---------|---------|----------------------
All files                           |   43.05 |    38.51 |   46.12 |   43.42 |                      
 src                                |     100 |      100 |     100 |     100 |                      
  App.js                            |     100 |      100 |     100 |     100 |                      
  index.js                          |     100 |      100 |     100 |     100 |                      
 src/api                            |      30 |    35.29 |      50 |      30 |                      
  axios.js                          |      30 |    35.29 |      50 |      30 | 25-30,37-38,46-78    
 src/components                     |     100 |      100 |     100 |     100 |                      
  Footer.js                         |     100 |      100 |     100 |     100 |                      
  Header.js                         |     100 |      100 |     100 |     100 |                      
  LargeTitle.js                     |     100 |      100 |     100 |     100 |                      
 src/components/bookingSystem       |    2.73 |        0 |       0 |    3.07 |                      
  Calendar.js                       |    5.88 |        0 |       0 |    6.25 | 8-28                 
  FacilityBooking.js                |    1.78 |        0 |       0 |    2.04 | 12-126               
 src/components/commonFacilities    |    5.33 |        0 |       0 |     5.4 |                      
  CommonFacilities.js               |    8.33 |        0 |       0 |    9.09 | 20-83                
  CreateCommonFacilities.js         |    1.72 |        0 |       0 |    1.72 | 10-121               
  FacilitiesList.js                 |   33.33 |        0 |       0 |   33.33 | 5-8                  
  FacilityCard.js                   |      50 |      100 |       0 |      50 | 4                    
 src/components/createProperty      |   50.85 |    48.09 |   71.05 |   50.43 |                      
  CreateLocker.js                   |    46.8 |    48.21 |      60 |   46.23 | ...4-125,130,155-182 
  CreateParking.js                  |   53.19 |       50 |      80 |   52.68 | ...8-139,144,178-184 
  CreateProperty.js                 |   48.52 |    42.85 |      50 |   48.52 | ...2-106,127-155,165 
  CreateUnit.js                     |   54.25 |       50 |      90 |   53.76 | ...5-126,131,168-175 
 src/components/dashboard           |     100 |      100 |     100 |     100 |                      
  DashBoard.js                      |     100 |      100 |     100 |     100 |                      
  FinancialPublic.js                |     100 |      100 |     100 |     100 |                      
  SubmittedRequests.js              |     100 |      100 |     100 |     100 |                      
 src/components/dashboard/financial |   89.47 |       80 |    87.5 |   89.47 |                      
  Financial.js                      |    87.5 |       80 |   85.71 |    87.5 | 18,103               
  Total.js                          |     100 |      100 |     100 |     100 |                      
 src/components/log                 |   34.44 |    27.63 |    42.3 |   34.44 |                      
  LogOut.js                         |     100 |      100 |     100 |     100 |                      
  Login.js                          |   71.42 |       50 |   83.33 |   71.42 | ...,60-61,66,104-109 
  SignUp.js                         |   39.21 |    48.48 |   44.44 |   39.21 | ...6,160-177,182-203 
  SignUpCompany.js                  |    0.98 |        0 |       0 |    0.98 | 10-207               
 src/components/nagivationBar       |     100 |      100 |     100 |     100 |                      
  NavigationBar.js                  |     100 |      100 |     100 |     100 |                      
 src/components/operationCost       |    2.27 |        0 |       0 |    2.38 |                      
  OperationCopy.js                  |    2.27 |        0 |       0 |    2.38 | 11-131               
 src/components/property            |   63.04 |    60.86 |   47.22 |   66.66 |                      
  PropertyCard.js                   |   41.66 |       25 |    7.69 |   45.45 | ...34-38,41-45,63-93 
  PropertyContainer.js              |    61.9 |    53.57 |   57.14 |    61.9 | 36-42,65-81          
  PropertyPage.js                   |   85.71 |    85.71 |      75 |    90.9 | 73-74,93             
 src/components/registrationKey     |   42.16 |       50 |    37.5 |   44.15 |                      
  SendRegistrationButton.js         |    62.5 |    58.33 |   52.94 |   66.66 | ...8-29,67,75-90,108 
  SubmitRegistrationButton.js       |       0 |        0 |       0 |       0 | 6-52                 
 src/components/userProfile         |    42.5 |       10 |   38.46 |   39.47 |                      
  UserProfile.js                    |    42.5 |       10 |   38.46 |   39.47 | 30-72,89             
 src/screens                        |     100 |      100 |     100 |     100 |                      
  HomeScreen.js                     |     100 |      100 |     100 |     100 |                      
 src/screens/homeScreenCarousel     |     100 |      100 |     100 |     100 |                      
  CarouselHomeScreen.js             |     100 |      100 |     100 |     100 |                      
 src/utils/hooks                    |   62.28 |       50 |   54.54 |    61.6 |                      
  AuthContext.js                    |   78.57 |       50 |     100 |   78.57 | 22-24                
  ProfileContext.js                 |   74.28 |       60 |   61.53 |   74.28 | 37,71-94,105         
  PropertyContext.js                |    52.3 |        0 |   41.17 |   50.79 | ...3,138-139,144-164 
------------------------------------|---------|----------|---------|---------|----------------------
  </pre>
</details>


## Code Quality
### Provided by:
[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-orange.svg)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)

### Indicators

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=bugs)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=coverage)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390#backend-coverage-report)
[![Duplicated Lines (%)‌](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390#frontend-coverage-report)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)

