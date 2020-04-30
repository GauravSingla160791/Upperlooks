var mySaveAs = app.trustedFunction(
   function(oPdf,cPath,cFlName)
   {
	  var isSaved=false;
      app.beginPriv();
      cPath = "/c/temp/";    //default path
	  // Ensure path has trailing "/"
      cPath = cPath.replace(/([^/])$/, "$1/");
      try{
         oPdf.saveAs(cPath + cFlName);
      }catch(e){
         app.alert("!Oops!! Something went wrong.");
      }
      app.endPriv();
   }
);

