/**
 * Created by admin on 2/7/2017.
 */

ionicModule.controller('cartomantiDetailCtrl', function ($scope, services, popups,$stateParams, EmpDataFactory,$location, $ionicSideMenuDelegate) {
                       //$ionicSideMenuDelegate.canDragContent(false)
                       console.log(EmpDataFactory)
                       $scope.empDetail = undefined
                       $scope.empImage = imageURL+EmpDataFactory.employeeDetail.no+ imgExtension;
                       $scope.$on('$ionicView.loaded', function () {
                                  if(localStorage.getItem('login')){
                                    $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id
                                  }
                                  
                                     
                                     services.getemployeeinfo({
                                                              id:$scope.custoerId,
                                                              employee_id:EmpDataFactory.employeeDetail.no
                                                              }, function (response) {
                                                              if (response.response_status == '1') {
                                                              if (response.response_key == 'SUCCESS') {
                                                              $scope.empDetail = response.response_data[0];
                                                              }else {
                                                              popups.showAlert(response.response_msg)
                                                              }
                                                              }
                                                              })
                                     });
                                  
                                  $scope.showShedule = function (empDetail) {
                                  //console.log(JSON.stringify(empDetail))
                                  if(empDetail.colore != undefined && empDetail.colore == '' ) {
                                  return '--OFF--'
                                  }else return empDetail.starttime +" "+ empDetail.endtime;
                                  }
                                  
                                  $scope.openConsulto = function () {
                                  if(!localStorage.getItem('login')) {
                                  popups.login(); return
                                  }
                                  $location.url('/app/consulto')
                                  }
                                  })
                       
                       
