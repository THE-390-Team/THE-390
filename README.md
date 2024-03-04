Submission for team 18 sprint 1 link on google drive:

https://drive.google.com/drive/folders/1PvXIhUKsRwX6eLFUD0lRPzZBL13F3WjT?usp=share_link

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/bb3c9af8236b4e89bc59c9172e2e41a3)](https://app.codacy.com/gh/JRB958/THE-390/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

## Testing Reports 
#### DJANGO UNIT TEST 

Name                                                                                   Stmts   Miss    Cover
|-----------------------------------------------------------------------------------------------------------
|core/__init__.py                                                                            0      0   100%
|core/settings.py                                                                           26      0   100%
|core/urls.py                                                                                7      0   100%
|jwt_auth_token/__init__.py                                                                  0      0   100%
|jwt_auth_token/admin.py                                                                     1      0   100%
|jwt_auth_token/apps.py                                                                      4      0   100%
|jwt_auth_token/migrations/__init__.py                                                       0      0   100%
|jwt_auth_token/models.py                                                                    1      0   100%
jwt_auth_token/tests.py                                                                     0      0   100%
jwt_auth_token/views.py                                                                    16      7    56%
manage.py                                                                                  12      2    83%
properties/__init__.py                                                                      0      0   100%
properties/admin.py                                                                         6      0   100%
properties/apps.py                                                                          4      0   100%
properties/migrations/0001_initial.py                                                       5      0   100%
properties/migrations/0002_initial.py                                                       6      0   100%
properties/migrations/0003_condounit_extra_information_condounit_owner_and_more.py          5      0   100%
properties/migrations/0004_rename_owner_condounit_public_profile_and_more.py                4      0   100%
properties/migrations/__init__.py                                                           0      0   100%
properties/models.py                                                                       47      4    91%
properties/serializers.py                                                                  34      5    85%
properties/tests.py                                                                        26      0   100%
properties/urls.py                                                                         12      0   100%
properties/views.py                                                                        87     61    30%
registration_key/__init__.py                                                                0      0   100%
registration_key/migrations/__init__.py                                                     0      0   100%
registration_key/tests.py                                                                   1      0   100%
user_profile/__init__.py                                                                    0      0   100%
user_profile/admin.py                                                                       7      0   100%
user_profile/apps.py                                                                        4      0   100%
user_profile/migrations/0001_initial.py                                                     8      0   100%
user_profile/migrations/0002_companyprofile_avatar_employeeprofile_avatar_and_more.py       4      0   100%
user_profile/migrations/__init__.py                                                         0      0   100%
user_profile/models.py                                                                     82      5    94%
user_profile/serializers.py                                                                38      0   100%
user_profile/tests.py                                                                      65      0   100%
user_profile/urls.py                                                                       13      0   100%
user_profile/views.py                                                                      63     33    48%
|-----------------------------------------------------------------------------------------------------------
|TOTAL                                                                                     588    117    80%

#### JEST UNIT TEST

> frontend@0.1.0 coverage
> react-scripts test --watchAll=false --coverage

-------------------------------|---------|----------|---------|---------|-------------------
File                           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------------------|---------|----------|---------|---------|-------------------
All files                      |    3.03 |        0 |     4.5 |     3.1 |                   
 src                           |       0 |      100 |       0 |       0 |                   
  App.js                       |       0 |      100 |       0 |       0 | 21                
  index.js                     |       0 |      100 |     100 |       0 | 10-12             
 src/api                       |       0 |        0 |       0 |       0 |                   
  axios.js                     |       0 |        0 |       0 |       0 | 3-83              
 src/components                |   57.14 |        0 |   66.66 |   57.14 |                   
  Content.js                   |     100 |      100 |     100 |     100 |                   
  Footer.js                    |     100 |      100 |     100 |     100 |                   
  Header.js                    |       0 |        0 |       0 |       0 | 11-13             
 src/components/createProperty |       0 |        0 |       0 |       0 |                   
  CreateLocker.js              |       0 |        0 |       0 |       0 | 12-68             
  CreateParking.js             |       0 |        0 |       0 |       0 | 12-68             
  CreateProperty.js            |       0 |        0 |       0 |       0 | 14-76             
  CreateUnit.js                |       0 |        0 |       0 |       0 | 12-68             
 src/components/dashboard      |   36.36 |      100 |      40 |   36.36 |                   
  DashBoard.js                 |       0 |      100 |       0 |       0 | 11-17             
  Financial.js                 |     100 |      100 |     100 |     100 |                   
  SubmittedRequests.js         |     100 |      100 |     100 |     100 |                   
  UserInfo.js                  |       0 |      100 |       0 |       0 | 15-26             
 src/components/log            |       0 |        0 |       0 |       0 |                   
  LogOut.js                    |       0 |      100 |       0 |       0 | 8-26              
  Login.js                     |       0 |        0 |       0 |       0 | 10-65             
  SignUp.js                    |       0 |        0 |       0 |       0 | 7-93              
 src/components/property       |       0 |      100 |       0 |       0 |                   
  PropertyCard.js              |       0 |      100 |       0 |       0 | 6-87              
  PropertyContainer.js         |       0 |      100 |       0 |       0 | 8-68              
  PropertyPage.js              |       0 |      100 |       0 |       0 | 7-72              
 src/components/userProfile    |       0 |        0 |       0 |       0 |                   
  UserProfile.js               |       0 |        0 |       0 |       0 | 15-90             
 src/screens                   |     100 |      100 |     100 |     100 |                   
  HomeScreen.js                |     100 |      100 |     100 |     100 |                   
 src/utils/hooks               |       0 |      100 |       0 |       0 |                   
  AuthContext.js               |       0 |      100 |       0 |       0 | 3-23              
  ProfileContext.js            |       0 |      100 |       0 |       0 | 5-55              
  PropertyContext.js           |       0 |      100 |       0 |       0 | 8-109             
-------------------------------|---------|----------|---------|---------|-------------------

