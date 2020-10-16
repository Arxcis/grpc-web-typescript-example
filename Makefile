grpc:
	rm -rf ./gen;
	mkdir ./gen;
	protoc -I=. echo.proto \
		--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
		--js_out="import_style=commonjs,binary:./gen" \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:./gen;

	sed -e 's/goog\.object\.extend.*/export default proto.grpc.gateway.testing;/'\
		-e "s/var jspb = require.*/import * as jspb from '.\/google-protobuf.js';/"\
		./gen/echo_pb.js > ./gen/echo_pb.esm.js;
	
run:
	python3 -m http.server

.PHONY: grpc run