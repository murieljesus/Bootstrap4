$(function(){$('[data-toggle="popover"]').popover(),$("#contact").on("show.bs.modal",function(o){console.log("el modal se esta mostrando"),$("#contactobtn").removeClass("btn - outline - info"),$("#contactobtn").addClass("btn-info"),$("#contactobtn").prop("disabled",!0)}),$("#contact").on("shown.bs.modal",function(o){console.log("el modal se mostro")}),$("#contact").on("hidden.bs.modal",function(o){console.log("el modal esta oculto")}),$("#contact").on("hide.bs.modal",function(o){console.log("el modal se oculto")})});