import {
  EchoServiceClient,
  GrpcError,
  GrpcStatus,
  EchoRequest,
  EchoResponse,
} from "./grpc/index.js";

//foo is now loaded.
const echoService = new EchoServiceClient("http://localhost:8080", null, null);

const request = new EchoRequest();
request.setMessage("Hello World!");

const call = echoService.echo(
  request,
  { "custom-header-1": "value1" },
  (err: GrpcError, response: EchoResponse) => {
    console.log({ message: response?.getMessage(), err });
  }
);

call.on("status", (status: GrpcStatus) => {
  console.log({ status });
});
