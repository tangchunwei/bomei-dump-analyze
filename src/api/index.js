import http from "@/utils/http.js";

export const toAnalysis = data => {
  return http({
    url: "/api/analysis",
    method: "post",
    data
  });
};