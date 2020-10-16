/**
 * @fileoverview gRPC-Web generated client stub for grpc.gateway.testing
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

import { AbstractClientBase, GrpcWebClientBase, Error } from "./grpc-web.js";
import {
  EchoRequest,
  EchoResponse,
  Empty,
  ServerStreamingEchoRequest,
  ServerStreamingEchoResponse,
} from "./echo_pb.js";

export class EchoServiceClient {
  client_: AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string };
  options_: null | { [index: string]: any };

  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any }
  ) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options["format"] = "text";

    this.client_ = new GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoEcho = new AbstractClientBase.MethodInfo(
    EchoResponse,
    (request: EchoRequest) => {
      return request.serializeBinary();
    },
    EchoResponse.deserializeBinary
  );

  echo(request: EchoRequest, metadata: Metadata | null): Promise<EchoResponse>;

  echo(
    request: EchoRequest,
    metadata: Metadata | null,
    callback: (err: Error, response: EchoResponse) => void
  ): ClientReadableStream<EchoResponse>;

  echo(
    request: EchoRequest,
    metadata: Metadata | null,
    callback?: (err: Error, response: EchoResponse) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/grpc.gateway.testing.EchoService/Echo",
        request,
        metadata || {},
        this.methodInfoEcho,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/grpc.gateway.testing.EchoService/Echo",
      request,
      metadata || {},
      this.methodInfoEcho
    );
  }

  methodInfoEchoAbort = new AbstractClientBase.MethodInfo(
    EchoResponse,
    (request: EchoRequest) => {
      return request.serializeBinary();
    },
    EchoResponse.deserializeBinary
  );

  echoAbort(
    request: EchoRequest,
    metadata: Metadata | null
  ): Promise<EchoResponse>;

  echoAbort(
    request: EchoRequest,
    metadata: Metadata | null,
    callback: (err: Error, response: EchoResponse) => void
  ): ClientReadableStream<EchoResponse>;

  echoAbort(
    request: EchoRequest,
    metadata: Metadata | null,
    callback?: (err: Error, response: EchoResponse) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/grpc.gateway.testing.EchoService/EchoAbort",
        request,
        metadata || {},
        this.methodInfoEchoAbort,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/grpc.gateway.testing.EchoService/EchoAbort",
      request,
      metadata || {},
      this.methodInfoEchoAbort
    );
  }

  methodInfoNoOp = new AbstractClientBase.MethodInfo(
    Empty,
    (request: Empty) => {
      return request.serializeBinary();
    },
    Empty.deserializeBinary
  );

  noOp(request: Empty, metadata: Metadata | null): Promise<Empty>;

  noOp(
    request: Empty,
    metadata: Metadata | null,
    callback: (err: Error, response: Empty) => void
  ): ClientReadableStream<Empty>;

  noOp(
    request: Empty,
    metadata: Metadata | null,
    callback?: (err: Error, response: Empty) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/grpc.gateway.testing.EchoService/NoOp",
        request,
        metadata || {},
        this.methodInfoNoOp,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/grpc.gateway.testing.EchoService/NoOp",
      request,
      metadata || {},
      this.methodInfoNoOp
    );
  }

  methodInfoServerStreamingEcho = new AbstractClientBase.MethodInfo(
    ServerStreamingEchoResponse,
    (request: ServerStreamingEchoRequest) => {
      return request.serializeBinary();
    },
    ServerStreamingEchoResponse.deserializeBinary
  );

  serverStreamingEcho(
    request: ServerStreamingEchoRequest,
    metadata?: Metadata
  ) {
    return this.client_.serverStreaming(
      this.hostname_ + "/grpc.gateway.testing.EchoService/ServerStreamingEcho",
      request,
      metadata || {},
      this.methodInfoServerStreamingEcho
    );
  }

  methodInfoServerStreamingEchoAbort = new AbstractClientBase.MethodInfo(
    ServerStreamingEchoResponse,
    (request: ServerStreamingEchoRequest) => {
      return request.serializeBinary();
    },
    ServerStreamingEchoResponse.deserializeBinary
  );

  serverStreamingEchoAbort(
    request: ServerStreamingEchoRequest,
    metadata?: Metadata
  ) {
    return this.client_.serverStreaming(
      this.hostname_ +
        "/grpc.gateway.testing.EchoService/ServerStreamingEchoAbort",
      request,
      metadata || {},
      this.methodInfoServerStreamingEchoAbort
    );
  }
}
