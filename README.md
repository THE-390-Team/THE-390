# CondoCare
Welcome to CondoCare, a student project aimed at revolutionizing condo management! Dive into our platform designed to simplify condo living for residents and management alike. Explore our innovative features for effortless communication, swift maintenance requests, and vibrant community engagement. Join us as we redefine condo living one click at a time!

This repository was last updated Thu May  2 03:21:28 UTC 2024

## Visit our website at the following link:
[CondoCare Website](https://condo-management-system.vercel.app/)

## Reports Overviews

<details>
  <summary>Backend Coverage Report</summary>
  <pre>
Name                                                                                             Stmts   Miss  Cover
--------------------------------------------------------------------------------------------------------------------
core/__init__.py                                                                                     0      0   100%
core/settings.py                                                                                    41      0   100%
core/urls.py                                                                                         7      0   100%
employee/__init__.py                                                                                 0      0   100%
employee/admin.py                                                                                    1      0   100%
employee/apps.py                                                                                     4      0   100%
employee/migrations/0001_initial.py                                                                  6      0   100%
employee/migrations/__init__.py                                                                      0      0   100%
employee/models.py                                                                                  28      0   100%
employee/serializers.py                                                                              6      0   100%
employee/tests.py                                                                                    1      0   100%
employee/urls.py                                                                                     6      0   100%
employee/views.py                                                                                   35     24    31%
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
user_profile/urls.py                                                                                15      0   100%
user_profile/views.py                                                                               97     63    35%
--------------------------------------------------------------------------------------------------------------------
TOTAL                                                                                             1282    241    81%
  </pre>
</details>


<details>
  <summary>Frontend Coverage Report</summary>
<pre>

=============================== Coverage summary ===============================
Statements   : 45.72% ( 604/1321 )
Branches     : 39.69% ( 235/592 )
Functions    : 50% ( 132/264 )
Lines        : 45.92% ( 597/1300 )
================================================================================
</pre>
  <pre>
------------------------------------|---------|----------|---------|---------|----------------------
File                                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s    
------------------------------------|---------|----------|---------|---------|----------------------
All files                           |   45.72 |    39.69 |      50 |   45.92 |                      
 src                                |     100 |      100 |     100 |     100 |                      
  App.js                            |     100 |      100 |     100 |     100 |                      
  index.js                          |     100 |      100 |     100 |     100 |                      
 src/api                            |      30 |    35.29 |      50 |      30 |                      
  axios.js                          |      30 |    35.29 |      50 |      30 | 25-30,37-38,46-78    
 src/components                     |     100 |      100 |     100 |     100 |                      
  Footer.js                         |     100 |      100 |     100 |     100 |                      
  Header.js                         |     100 |      100 |     100 |     100 |                      
  LargeTitle.js                     |     100 |      100 |     100 |     100 |                      
 src/components/bookingSystem       |     3.4 |        0 |       0 |    3.65 |                      
  Calendar.js                       |    5.88 |        0 |       0 |    6.25 | 7-26                 
  FacilityBooking.js                |    1.47 |        0 |       0 |    1.58 | 12-152               
  ReservationTable.js               |   33.33 |      100 |       0 |   33.33 | 6-17                 
 src/components/commonFacilities    |    5.33 |        0 |       0 |    5.33 |                      
  CommonFacilities.js               |    8.33 |        0 |       0 |    8.33 | 19-94                
  CreateCommonFacilities.js         |    1.72 |        0 |       0 |    1.72 | 10-131               
  FacilitiesList.js                 |   33.33 |        0 |       0 |   33.33 | 5-9                  
  FacilityCard.js                   |      50 |      100 |       0 |      50 | 4                    
 src/components/createProperty      |   52.57 |    48.57 |   76.31 |   52.16 |                      
  CreateLocker.js                   |   53.19 |       50 |      80 |   52.68 | ...0,125,159-165,176 
  CreateParking.js                  |   53.19 |       50 |      80 |   52.68 | ...1-132,137,173-179 
  CreateProperty.js                 |   48.52 |    42.85 |      50 |   48.52 | ...95-99,119-149,159 
  CreateUnit.js                     |   54.25 |       50 |      90 |   53.76 | ...9-120,125,162-168 
 src/components/dashboard           |    77.5 |    68.75 |   76.92 |    77.5 |                      
  DashBoard.js                      |     100 |      100 |     100 |     100 |                      
  FinancialPublic.js                |     100 |      100 |     100 |     100 |                      
  SubmittedRequests.js              |   66.66 |    58.33 |   57.14 |   66.66 | 32,37-43,54,60-63    
 src/components/dashboard/financial |   89.47 |       80 |    87.5 |   89.47 |                      
  Financial.js                      |    87.5 |       80 |   85.71 |    87.5 | 27,156               
  Total.js                          |     100 |      100 |     100 |     100 |                      
 src/components/log                 |   34.44 |    27.63 |    42.3 |   34.44 |                      
  LogOut.js                         |     100 |      100 |     100 |     100 |                      
  Login.js                          |   71.42 |       50 |   83.33 |   71.42 | ...,59-60,65,103-108 
  SignUp.js                         |   39.21 |    48.48 |   44.44 |   39.21 | ...2,165-182,187-208 
  SignUpCompany.js                  |    0.98 |        0 |       0 |    0.98 | 9-214                
 src/components/nagivationBar       |     100 |      100 |     100 |     100 |                      
  NavigationBar.js                  |     100 |      100 |     100 |     100 |                      
 src/components/operationCost       |   95.45 |       75 |     100 |   95.45 |                      
  OperationCopy.js                  |   95.45 |       75 |     100 |   95.45 | 53,81                
 src/components/property            |   63.04 |    60.86 |   47.22 |   66.66 |                      
  PropertyCard.js                   |   41.66 |       25 |    7.69 |   45.45 | ...3-37,40-44,86-150 
  PropertyContainer.js              |    61.9 |    53.57 |   57.14 |    61.9 | 35-41,67-95          
  PropertyPage.js                   |   85.71 |    85.71 |      75 |    90.9 | 130-131,169          
 src/components/registrationKey     |   42.16 |       50 |    37.5 |   43.75 |                      
  SendRegistrationButton.js         |    62.5 |    58.33 |   52.94 |   64.81 | ...77-95,112,145,171 
  SubmitRegistrationButton.js       |       0 |        0 |       0 |       0 | 6-54                 
 src/components/request             |    4.65 |        0 |       0 |    4.65 |                      
  CreateRequest.js                  |    2.43 |        0 |       0 |    2.43 | 11-115               
  EditRequest.js                    |      50 |      100 |       0 |      50 | 11                   
 src/components/userProfile         |    42.5 |       10 |   38.46 |   39.47 |                      
  UserProfile.js                    |    42.5 |       10 |   38.46 |   39.47 | 30-70,85             
 src/screens                        |     100 |      100 |     100 |     100 |                      
  HomeScreen.js                     |     100 |      100 |     100 |     100 |                      
 src/screens/homeScreenCarousel     |     100 |      100 |     100 |     100 |                      
  CarouselHomeScreen.js             |     100 |      100 |     100 |     100 |                      
 src/utils/hooks                    |   66.66 |       50 |   57.57 |   66.07 |                      
  AuthContext.js                    |   78.57 |       50 |     100 |   78.57 | 21-23                
  ProfileContext.js                 |   74.28 |       60 |   61.53 |   74.28 | 37,71-94,104         
  PropertyContext.js                |      60 |        0 |   47.05 |   58.73 | ...1,146-147,152-175 
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

