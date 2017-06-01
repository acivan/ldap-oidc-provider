/* eslint-disable */
"use strict";

const { expect } = require("chai");

const settings = require("../provider/configurator");

describe("Configurator", function() {
    it("configurator object", function() {
        expect(settings).to.be.a("object");
    });
    it("uninitialized key stores ", function () {
        expect(settings.keyStores).to.be.an("object");
        expect(settings.keyStores).to.have.keys("clients", "keystore", "integrity", "adapter");

        expect(settings.keyStores.clients).to.be.an("array");
        expect(settings.keyStores.clients).to.be.empty;
        expect(settings.keyStores.keystore).to.be.an("object").that.has.keys("keys");
        expect(settings.keyStores.integrity).to.be.an("object").that.has.keys("keys");
        expect(settings.keyStores.keystore.keys).to.be.empty;
        expect(settings.keyStores.integrity.keys).to.be.empty;
    });

    it("initialized key stores ", async function () {
        await settings.loadKeyStores()
        expect(settings.keyStores).to.be.an("object");
        expect(settings.keyStores).to.have.keys("clients", "keystore", "integrity", "adapter");

        expect(settings.keyStores.clients).to.be.an("array");
        expect(settings.keyStores.clients).to.be.empty;
        expect(settings.keyStores.keystore).to.be.an("object").that.has.keys("keys");
        expect(settings.keyStores.integrity).to.be.an("object").that.has.keys("keys");
        expect(settings.keyStores.keystore.keys).to.have.lengthOf(5);
        expect(settings.keyStores.integrity.keys).to.have.lengthOf(1);
    });

});
