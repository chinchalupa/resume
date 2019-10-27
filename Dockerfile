FROM nginx:1.17.4

COPY default.conf /etc/nginx/conf.d/default.conf
COPY resume.html /usr/share/nginx/html/index.html
