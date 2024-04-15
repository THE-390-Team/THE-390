
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/bb3c9af8236b4e89bc59c9172e2e41a3)](https://app.codacy.com/gh/JRB958/THE-390/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

Date: Mon Apr 15 02:58:15 UTC 2024

Code Quality Indicators

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=NicholasWahome_THE-390&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=NicholasWahome_THE-390)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=NicholasWahome_THE-390&metric=bugs)](https://sonarcloud.io/summary/new_code?id=NicholasWahome_THE-390)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=NicholasWahome_THE-390&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=NicholasWahome_THE-390)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=NicholasWahome_THE-390&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=NicholasWahome_THE-390)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=NicholasWahome_THE-390&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=NicholasWahome_THE-390)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=NicholasWahome_THE-390&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=NicholasWahome_THE-390)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=NicholasWahome_THE-390&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=NicholasWahome_THE-390)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=NicholasWahome_THE-390&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=NicholasWahome_THE-390)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=NicholasWahome_THE-390&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=NicholasWahome_THE-390)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=NicholasWahome_THE-390&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=NicholasWahome_THE-390)

Code Coverage Tree

[![codecov](https://codecov.io/gh/THE-390-Team/THE-390/graph/badge.svg?token=FW880JJXGB)](https://codecov.io/gh/THE-390-Team/THE-390)


## Testing Reports from Workflow


> frontend@0.1.0 coverage
> react-scripts test --watchAll=false --coverage

------------------------------------|---------|----------|---------|---------|--------------------------------
File                                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s              
------------------------------------|---------|----------|---------|---------|--------------------------------
All files                           |   15.38 |      5.9 |   20.28 |   15.26 |                                
 src                                |   66.66 |      100 |     100 |   66.66 |                                
  App.js                            |     100 |      100 |     100 |     100 |                                
  index.js                          |       0 |      100 |     100 |       0 | 10-12                          
 src/api                            |   26.66 |    29.41 |      50 |   26.66 |                                
  axios.js                          |   26.66 |    29.41 |      50 |   26.66 | 25-30,37-38,46-83              
 src/components                     |     100 |      100 |     100 |     100 |                                
  Content.js                        |     100 |      100 |     100 |     100 |                                
  Footer.js                         |     100 |      100 |     100 |     100 |                                
  Header.js                         |     100 |      100 |     100 |     100 |                                
  LargeTitle.js                     |     100 |      100 |     100 |     100 |                                
 src/components/commonFacilities    |    12.5 |        0 |       0 |    12.5 |                                
  CommonFacilities.js               |    12.5 |        0 |       0 |    12.5 | 19-29                          
 src/components/createProperty      |    1.14 |        0 |       0 |    1.15 |                                
  CreateLocker.js                   |    1.06 |        0 |       0 |    1.07 | 14-185                         
  CreateParking.js                  |    1.06 |        0 |       0 |    1.07 | 15-188                         
  CreateProperty.js                 |    1.47 |        0 |       0 |    1.47 | 15-168                         
  CreateUnit.js                     |    1.06 |        0 |       0 |    1.07 | 15-189                         
 src/components/dashboard           |   94.44 |      100 |    87.5 |   94.44 |                                
  DashBoard.js                      |    87.5 |      100 |   66.66 |    87.5 | 20                             
  FinancialPublic.js                |     100 |      100 |     100 |     100 |                                
  SubmittedRequests.js              |     100 |      100 |     100 |     100 |                                
  UserInfo.js                       |     100 |      100 |     100 |     100 |                                
 src/components/dashboard/financial |   21.05 |        0 |    12.5 |   21.05 |                                
  Financial.js                      |    6.25 |        0 |       0 |    6.25 | 8-103                          
  Total.js                          |     100 |      100 |     100 |     100 |                                
 src/components/log                 |    1.49 |        0 |       0 |    1.49 |                                
  LogOut.js                         |    6.66 |      100 |       0 |    6.66 | 10-30                          
  Login.js                          |    2.04 |        0 |       0 |    2.04 | 13-113                         
  SignUp.js                         |    0.98 |        0 |       0 |    0.98 | 10-208                         
  SignUpCompany.js                  |    0.98 |        0 |       0 |    0.98 | 10-207                         
 src/components/nagivationBar       |   78.57 |       50 |     100 |   78.57 |                                
  NavigationBar.js                  |   78.57 |       50 |     100 |   78.57 | 17,19,21                       
 src/components/operationCost       |    4.76 |      100 |       0 |    4.76 |                                
  Operation.js                      |    4.76 |      100 |       0 |    4.76 | 7-130                          
 src/components/property            |    3.48 |        0 |       0 |     3.7 |                                
  PropertyCard.js                   |    2.77 |        0 |       0 |    3.03 | 10-93                          
  PropertyContainer.js              |    6.66 |        0 |       0 |    6.66 | 21-58                          
  PropertyPage.js                   |    2.85 |        0 |       0 |    3.03 | 12-105                         
 src/components/registrationKey     |   65.06 |    64.28 |   66.66 |   64.93 |                                
  SendRegistrationButton.js         |   96.42 |       75 |   94.11 |   98.03 | 88                             
  SubmitRegistrationButton.js       |       0 |        0 |       0 |       0 | 6-52                           
 src/components/userProfile         |     2.5 |        0 |       0 |    2.63 |                                
  UserProfile.js                    |     2.5 |        0 |       0 |    2.63 | 19-102                         
 src/screens                        |     100 |      100 |     100 |     100 |                                
  HomeScreen.js                     |     100 |      100 |     100 |     100 |                                
 src/screens/homeScreenCarousel     |     100 |      100 |     100 |     100 |                                
  CarouselHomeScreen.js             |     100 |      100 |     100 |     100 |                                
 src/utils/hooks                    |   38.77 |     8.33 |   19.35 |   39.58 |                                
  AuthContext.js                    |   78.57 |       50 |     100 |   78.57 | 22-24                          
  ProfileContext.js                 |   22.85 |        0 |   15.38 |   22.85 | 26-37,43-99,105                
  PropertyContext.js                |   38.77 |      100 |    6.66 |   40.42 | 45-56,63-68,74-79,85-90,96-118 
------------------------------------|---------|----------|---------|---------|--------------------------------
Found 37 test(s).
System check identified no issues (0 silenced).
