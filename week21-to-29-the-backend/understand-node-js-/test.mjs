import axios from "axios";

const token ="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJ3YXFhc3Z1ODkyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InVzZXJfaWQiOiJ1c2VyLUxUV3JFbE1qWTM2M1oxNHJDSmRCNDhnTiJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTY4MjM2MzE5Nzg3OTk4OTUzMDMiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjgyNzE5Mjc5LCJleHAiOjE2ODM5Mjg4NzksImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MifQ.BIYGRQim9Irk72wFffwzqQ6vV7rc8dis1ERL7KH1JtLD-FDC4PuP9io_Q45dzW_OnnFqlIeH2wMwnDt5HPHjLjZJOM-bRk-hsz0SVEhvxG0Xh9723y-hLdTs2WY6QGGL6XpTmFPGOESwEkBLKmppP21oR8o3jDXjb0m8HeHGsqZvAXYVlsIpa_h9iiraKle5mW0HyMP6cwHzAMVDo9t0YI4RaUBk6IOPWD_Hr-G4ZoslRYEIkz46XfwWiCIPsUBI-jUP7pXSmSZrmk8odGXxGCH8-BFvR0Cs_zuM8rEK3QiMdIqRgVhi9ard5jwvK_Mb1KpNWHznsnAnBlL1ggqvUw"

const endpoint = 'https://api.openai.com/v1/search';
const prompt = 'Hello, world!';
const model = 'text-davinci-002';
console.log(":hellop ")

axios.interceptors.request.use(config => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  axios.post('https://api.openai.com/v1/completions', {
    data: "hi",
  })
  .then(response => {
     console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
  