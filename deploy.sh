docker build -t zeferinix/ryza-pw-finder-web:latest .
docker push zeferinix/ryza-pw-finder-web:latest
ssh root@66.42.56.111 "docker pull zeferinix/ryza-pw-finder-web:latest && docker tag zeferinix/ryza-pw-finder-web:latest dokku/ryza-pw-finder.zeferinix.com:latest && dokku tags:deploy ryza-pw-finder.zeferinix.com latest"
