gem install scss-lint
scss-lint .
[[ $? -ne 0 ]] && echo 'scss-lint failed' && exit 1 || echo 'scss-lint was successful'
npm install -g gulp
