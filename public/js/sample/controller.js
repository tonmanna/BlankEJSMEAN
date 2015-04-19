define(['../app','./service'], function (app) {
    app.register.controller('sampleCtrl', function ($scope,$modal,sampleService) {
        $scope.activePage = 2; //"Sample";
        $scope.readSampleData = [];

        ///------------ Create Section ---------------------
        $scope.createSample = function(){
            sampleService.createSample().then(function(result){
                if(result!="ERROR") {
                    toastr.success('การบันทึกสำเร็จ', 'การบันทึกข้อมูล');
                    $scope.readSampleData.push(result);
                }else{
                    toastr.warning('การบันทึกผิดพลาด' + result, 'การบันทึกข้อมูล');
                }
            })
        };
        $scope.createNewSample = function(){
            sampleService.createNewSample($scope.modalData).then(function(result){
                if(result!="ERROR") {
                    toastr.success('การบันทึกสำเร็จ', 'การบันทึกข้อมูล');
                    $scope.readSampleData.push(result);
                }else{
                    toastr.warning('การปรับปรุงผิดพลาด' + result, 'การปรับปรุงผิดพลาด');
                }
            });
        }
        ///-------------------------------------------------

        ///------------- Read Section ----------------------
        $scope.modalData = {};
        $scope.read = function(id,cb){
            sampleService.readSample(id).then(function(result){
                    cb(result);
            });
        }
        $scope.readAllSample = function(){
            sampleService.readAllSample().then(function(result){
                if(result!="ERROR") {
                    $scope.readSampleData = result;
                }else{
                    toastr.warning('การอ่านข้อมูลผิดพลาด' + result, 'การอ่านข้อมูลผิดพลาด');
                }
            })
        };
        // TODO : Pagination Serverside ReadData

        ///-------------------------------------------------

        ///------------- Update Section --------------------
        $scope.updateSample = function(){
            var id = $scope.currentID;
            var index = $scope.currentIndex;
            sampleService.updateSample($scope.modalData,id).then(function(result){
                if(result!="ERROR") {
                    $scope.readSampleData[index] = $scope.modalData;
                }else{
                    toastr.warning('การปรับปรุงผิดพลาด' + result, 'การปรับปรุงผิดพลาด');
                }
            })
        }
        ///-------------------------------------------------

        ///------------- Delete Section --------------------
        $scope.deleteConfirm = function(id,index){
            $scope.currentID = id;
            $scope.currentIndex = index;
            $modal({scope: $scope, template: '/views/sample/modal/sampleConfirm.html', show: true});
        };
        $scope.deleteSample = function(){
            var id = $scope.currentID;
            var index = $scope.currentIndex;

            sampleService.deleteSample(id).then(function(result){
                if(result!="ERROR") {
                    $scope.readSampleData.splice(index,1);
                }else{
                    toastr.warning('การลบผิดพลาด' + result, 'การลบผิดพลาด');
                }
            })
        };
        ///-------------------------------------------------

        ///-------------- Other Section --------------------
        $scope.checkData = function(){
            switch($scope.modalMode){
                case "create" :
                    $scope.createNewSample();
                    break;
                case "edit" :
                    $scope.updateSample();
                    break;
            }
        }
        $scope.showSample = function(type,id,index){
            $scope.modalMode = type;
            $scope.currentID = id;
            $scope.currentIndex = index;
            var myOtherModal = $modal({scope: $scope, template: '/views/sample/modal/sampleModal.html', show: false});

            switch(type){
                case 'create' :
                    $scope.modalData = {};
                    $scope.modalData.readOnly = false;
                    myOtherModal.$promise.then(myOtherModal.show);
                    break;
                case 'show' :
                    $scope.read(id,function(result){
                        if(result!="ERROR") {
                            myOtherModal.$promise.then(myOtherModal.show);
                            $scope.modalData = result;
                            $scope.modalData.bCreate = JSON.parse(result.bCreate);
                            $scope.modalData.readOnly = true;
                        }else{
                            toastr.warning('การอ่านข้อมูลผิดพลาด' + result, 'การอ่านข้อมูลผิดพลาด');
                        }
                    });

                    break;
                case 'edit' :
                    $scope.read(id,function(result){
                        if(result!="ERROR") {
                            myOtherModal.$promise.then(myOtherModal.show);
                            $scope.modalData = result;
                            $scope.modalData.bCreate = JSON.parse(result.bCreate);
                            $scope.modalData.readOnly = false;
                        }else{
                            toastr.warning('การอ่านข้อมูลผิดพลาด' + result, 'การอ่านข้อมูลผิดพลาด');
                        }
                    });
                    break;
            }
        };
        ///-------------------------------------------------
    });
});