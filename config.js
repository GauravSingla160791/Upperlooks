var mySaveAs = app.trustedFunction(
   function(oPdf,cPath,cFlName)
   {
      app.beginPriv();
      // Ensure path has trailing "/"
      cPath = cPath.replace(/([^/])$/, "$1/");
      
         oPdf.saveAs(cPath + cFlName);
      
       app.endPriv();
   }
);