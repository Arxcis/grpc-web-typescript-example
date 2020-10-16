import {
  Message as jspbMessage,
  BinaryReader as jspbBinaryReader,
  BinaryWriter as jspbBinaryWriter,
} from "./google-protobuf.js";

type EmptyAsObject = {};

type EchoRequestAsObject = {
  message: string;
};

type EchoResponseAsObject = {
  message: string;
  messageCount: number;
};

type ServerStreamingEchoRequestAsObject = {
  message: string;
  messageCount: number;
  messageInterval: number;
};

type ServerStreamingEchoResponseAsObject = {
  message: string;
};

type ClientStreamingEchoRequestAsObject = {
  message: string;
};

type ClientStreamingEchoResponseAsObject = {
  messageCount: number;
};

export class Empty extends jspbMessage {
  constructor(opt_data?: jspbMessage.MessageArray) {
    super();
    jspbMessage.initialize(this, opt_data, 0, -1, null, null);
  }
  serializeBinary(): Uint8Array {
    var writer = new jspbBinaryWriter();
    Empty.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  toObject(includeInstance?: boolean): EmptyAsObject {
    return Empty.toObject(includeInstance, this);
  }

  static toObject(includeInstance: boolean, msg: Empty): EmptyAsObject {
    const obj = {
      $jspbMessageInstance: includeInstance ? msg : undefined,
    };

    return obj;
  }
  static serializeBinaryToWriter(
    message: Empty,
    writer: jspbBinaryWriter
  ): void {
    var f = undefined;
  }

  static deserializeBinary(bytes: Uint8Array): Empty {
    var reader = new jspbBinaryReader(bytes);
    var msg = new Empty();
    return Empty.deserializeBinaryFromReader(msg, reader);
  }

  static deserializeBinaryFromReader(
    msg: Empty,
    reader: jspbBinaryReader
  ): Empty {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  }
}

export class EchoRequest extends jspbMessage {
  constructor(opt_data?: jspbMessage.MessageArray) {
    super();
    jspbMessage.initialize(this, opt_data, 0, -1, null, null);
  }
  getMessage(): string {
    return /** @type {string} */ jspbMessage.getFieldWithDefault(this, 1, "");
  }

  setMessage(value: string): EchoRequest {
    return jspbMessage.setProto3StringField(this, 1, value);
  }

  serializeBinary(): Uint8Array {
    var writer = new jspbBinaryWriter();
    EchoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  toObject(includeInstance?: boolean): EchoRequestAsObject {
    return EchoRequest.toObject(includeInstance, this);
  }

  static toObject(
    includeInstance: boolean,
    msg: EchoRequest
  ): EchoRequestAsObject {
    var f,
      obj = {
        message: jspbMessage.getFieldWithDefault(msg, 1, ""),
        $jspbMessageInstance: includeInstance ? msg : undefined,
      };

    return obj;
  }

  static serializeBinaryToWriter(
    message: EchoRequest,
    writer: jspbBinaryWriter
  ): void {
    var f = undefined;
    f = message.getMessage();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  }

  static deserializeBinary(bytes: Uint8Array): EchoRequest {
    var reader = new jspbBinaryReader(bytes);
    var msg = new EchoRequest();
    return EchoRequest.deserializeBinaryFromReader(msg, reader);
  }

  static deserializeBinaryFromReader(
    msg: EchoRequest,
    reader: jspbBinaryReader
  ): EchoRequest {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ reader.readString();
          msg.setMessage(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  }
}

export class EchoResponse extends jspbMessage {
  constructor(opt_data?: jspbMessage.MessageArray) {
    super();
    jspbMessage.initialize(this, opt_data, 0, -1, null, null);
  }

  getMessage(): string {
    return jspbMessage.getFieldWithDefault(this, 1, "");
  }

  setMessage(value: string): EchoResponse {
    return jspbMessage.setProto3StringField(this, 1, value);
  }

  getMessageCount(): number {
    return jspbMessage.getFieldWithDefault(this, 2, 0);
  }

  setMessageCount(value: number): EchoResponse {
    return jspbMessage.setProto3IntField(this, 2, value);
  }

  serializeBinary(): Uint8Array {
    var writer = new jspbBinaryWriter();
    EchoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  toObject(includeInstance?: boolean): EchoResponseAsObject {
    return EchoResponse.toObject(includeInstance, this);
  }

  static toObject(
    includeInstance: boolean,
    msg: EchoResponse
  ): EchoResponseAsObject {
    const obj = {
      message: jspbMessage.getFieldWithDefault(msg, 1, ""),
      messageCount: jspbMessage.getFieldWithDefault(msg, 2, 0),
      $jspbMessageInstance: includeInstance ? msg : undefined,
    };

    return obj;
  }

  static serializeBinaryToWriter(
    message: EchoResponse,
    writer: jspbBinaryWriter
  ): void {
    var f = undefined;
    f = message.getMessage();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getMessageCount();
    if (f !== 0) {
      writer.writeInt32(2, f);
    }
  }

  static deserializeBinary(bytes: Uint8Array): EchoResponse {
    var reader = new jspbBinaryReader(bytes);
    var msg = new EchoResponse();
    return EchoResponse.deserializeBinaryFromReader(msg, reader);
  }

  static deserializeBinaryFromReader(
    message: EchoResponse,
    reader: jspbBinaryReader
  ): EchoResponse {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          message.setMessage(reader.readString());
          break;
        case 2:
          message.setMessageCount(reader.readInt32());
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return message;
  }
}

export class ServerStreamingEchoRequest extends jspbMessage {
  constructor(opt_data?: jspbMessage.MessageArray) {
    super();
    jspbMessage.initialize(this, opt_data, 0, -1, null, null);
  }
  getMessage(): string {
    return /** @type {string} */ jspbMessage.getFieldWithDefault(this, 1, "");
  }

  setMessage(value: string): ServerStreamingEchoRequest {
    return jspbMessage.setProto3StringField(this, 1, value);
  }

  getMessageCount(): number {
    return /** @type {number} */ jspbMessage.getFieldWithDefault(this, 2, 0);
  }

  setMessageCount(value: number): ServerStreamingEchoRequest {
    return jspbMessage.setProto3IntField(this, 2, value);
  }

  getMessageInterval(): number {
    return /** @type {number} */ jspbMessage.getFieldWithDefault(this, 3, 0);
  }

  setMessageInterval(value: number): ServerStreamingEchoRequest {
    return jspbMessage.setProto3IntField(this, 3, value);
  }

  serializeBinary(): Uint8Array {
    var writer = new jspbBinaryWriter();
    ServerStreamingEchoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  toObject(includeInstance?: boolean): ServerStreamingEchoRequestAsObject {
    return ServerStreamingEchoRequest.toObject(includeInstance, this);
  }

  static toObject(
    includeInstance: boolean,
    msg: ServerStreamingEchoRequest
  ): ServerStreamingEchoRequestAsObject {
    var f,
      obj = {
        message: jspbMessage.getFieldWithDefault(msg, 1, ""),
        messageCount: jspbMessage.getFieldWithDefault(msg, 2, 0),
        messageInterval: jspbMessage.getFieldWithDefault(msg, 3, 0),
        $jspbMessageInstance: includeInstance ? msg : undefined,
      };

    return obj;
  }

  static serializeBinaryToWriter(
    message: ServerStreamingEchoRequest,
    writer: jspbBinaryWriter
  ): void {
    var f = undefined;
    f = message.getMessage();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getMessageCount();
    if (f !== 0) {
      writer.writeInt32(2, f);
    }
    f = message.getMessageInterval();
    if (f !== 0) {
      writer.writeInt32(3, f);
    }
  }
  static deserializeBinary(bytes: Uint8Array): ServerStreamingEchoRequest {
    var reader = new jspbBinaryReader(bytes);
    var msg = new ServerStreamingEchoRequest();
    return ServerStreamingEchoRequest.deserializeBinaryFromReader(msg, reader);
  }

  static deserializeBinaryFromReader(
    msg: ServerStreamingEchoRequest,
    reader: jspbBinaryReader
  ): ServerStreamingEchoRequest {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          msg.setMessage(reader.readString());
          break;
        case 2:
          msg.setMessageCount(reader.readInt32());
          break;
        case 3:
          msg.setMessageInterval(reader.readInt32());
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  }
}

export class ServerStreamingEchoResponse extends jspbMessage {
  constructor(opt_data?: jspbMessage.MessageArray) {
    super();
    jspbMessage.initialize(this, opt_data, 0, -1, null, null);
  }
  getMessage(): string {
    return /** @type {string} */ jspbMessage.getFieldWithDefault(this, 1, "");
  }
  setMessage(value: string): ServerStreamingEchoResponse {
    return jspbMessage.setProto3StringField(this, 1, value);
  }

  serializeBinary(): Uint8Array {
    var writer = new jspbBinaryWriter();
    ServerStreamingEchoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  toObject(includeInstance?: boolean): ServerStreamingEchoResponseAsObject {
    return ServerStreamingEchoResponse.toObject(includeInstance, this);
  }
  static toObject(
    includeInstance: boolean,
    msg: ServerStreamingEchoResponse
  ): ServerStreamingEchoResponseAsObject {
    var f,
      obj = {
        message: jspbMessage.getFieldWithDefault(msg, 1, ""),
        $jspbMessageInstance: includeInstance ? msg : undefined,
      };

    return obj;
  }
  static serializeBinaryToWriter(
    message: ServerStreamingEchoResponse,
    writer: jspbBinaryWriter
  ): void {
    var f = undefined;
    f = message.getMessage();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  }

  static deserializeBinary(bytes: Uint8Array): ServerStreamingEchoResponse {
    var reader = new jspbBinaryReader(bytes);
    var msg = new ServerStreamingEchoResponse();
    return ServerStreamingEchoResponse.deserializeBinaryFromReader(msg, reader);
  }

  static deserializeBinaryFromReader(
    message: ServerStreamingEchoResponse,
    reader: jspbBinaryReader
  ): ServerStreamingEchoResponse {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ reader.readString();
          message.setMessage(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return message;
  }
}

export class ClientStreamingEchoRequest extends jspbMessage {
  constructor(opt_data?: jspbMessage.MessageArray) {
    super();
    jspbMessage.initialize(this, opt_data, 0, -1, null, null);
  }

  getMessage(): string {
    return /** @type {string} */ jspbMessage.getFieldWithDefault(this, 1, "");
  }

  setMessage(value: string): ClientStreamingEchoRequest {
    return jspbMessage.setProto3StringField(this, 1, value);
  }

  serializeBinary(): Uint8Array {
    var writer = new jspbBinaryWriter();
    ClientStreamingEchoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  toObject(includeInstance?: boolean): ClientStreamingEchoRequestAsObject {
    return ClientStreamingEchoRequest.toObject(includeInstance, this);
  }
  static toObject(
    includeInstance: boolean,
    msg: ClientStreamingEchoRequest
  ): ClientStreamingEchoRequestAsObject {
    var f,
      obj = {
        message: jspbMessage.getFieldWithDefault(msg, 1, ""),
        $jspbMessageInstance: includeInstance ? msg : undefined,
      };

    return obj;
  }
  static serializeBinaryToWriter(
    message: ClientStreamingEchoRequest,
    writer: jspbBinaryWriter
  ): void {
    var f = undefined;
    f = message.getMessage();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  }

  static deserializeBinary(bytes: Uint8Array): ClientStreamingEchoRequest {
    var reader = new jspbBinaryReader(bytes);
    var msg = new ClientStreamingEchoRequest();
    return ClientStreamingEchoRequest.deserializeBinaryFromReader(msg, reader);
  }
  static deserializeBinaryFromReader(
    msg: ClientStreamingEchoRequest,
    reader: jspbBinaryReader
  ): ClientStreamingEchoRequest {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ reader.readString();
          msg.setMessage(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  }
}

export class ClientStreamingEchoResponse extends jspbMessage {
  constructor(opt_data?: jspbMessage.MessageArray) {
    super();
    jspbMessage.initialize(this, opt_data, 0, -1, null, null);
  }

  getMessageCount(): number {
    return /** @type {number} */ jspbMessage.getFieldWithDefault(this, 1, 0);
  }

  setMessageCount(value: number): ClientStreamingEchoResponse {
    return jspbMessage.setProto3IntField(this, 1, value);
  }

  serializeBinary(): Uint8Array {
    var writer = new jspbBinaryWriter();
    ClientStreamingEchoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  toObject(includeInstance?: boolean): ClientStreamingEchoResponseAsObject {
    return ClientStreamingEchoResponse.toObject(includeInstance, this);
  }

  static toObject(
    includeInstance: boolean,
    msg: ClientStreamingEchoResponse
  ): ClientStreamingEchoResponseAsObject {
    var f,
      obj = {
        messageCount: jspbMessage.getFieldWithDefault(msg, 1, 0),
        $jspbMessageInstance: includeInstance ? msg : undefined,
      };

    return obj;
  }

  static serializeBinaryToWriter(
    message: ClientStreamingEchoResponse,
    writer: jspbBinaryWriter
  ): void {
    var f = undefined;
    f = message.getMessageCount();
    if (f !== 0) {
      writer.writeInt32(1, f);
    }
  }

  static deserializeBinary(bytes: Uint8Array): ClientStreamingEchoResponse {
    var reader = new jspbBinaryReader(bytes);
    var msg = new ClientStreamingEchoResponse();
    return ClientStreamingEchoResponse.deserializeBinaryFromReader(msg, reader);
  }

  static deserializeBinaryFromReader(
    msg: ClientStreamingEchoResponse,
    reader: jspbBinaryReader
  ): ClientStreamingEchoResponse {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {number} */ reader.readInt32();
          msg.setMessageCount(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  }
}
