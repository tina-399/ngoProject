const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

// styling method
chai.should();

// middleware
chai.use(chaiHttp);

describe("Testing Group Controller", () => {
  describe("GET ALL Group", () => {
    it("Should return all groups", (done) => {
      chai
        .request(server)
        .get("/groups")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");

          done();
        });
    });

    it("Should not return all groups", (done) => {
      chai
        .request(server)
        .get("/group")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe("GET Single Group", () => {
    it("Should return Single Group", (done) => {
      const postId = "606320fb2a97e22fc4ce9b07";
      chai
        .request(server)
        .get(`/groups/${groupId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("Should not return Single Group", (done) => {
      const postId = "606320fb2a97e22fc4";
      chai
        .request(server)
        .get("/groups/${groupId}")
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("UPDATE single group", () => {
    it("Should Update a group", (done) => {
      const postId = "606321122a97e22fc4ce9b08";
      const body = {
        content: "First Post Content",
      };

      chai
        .request(server)
        .patch(`/groups/${groupId}`)
        .send(body)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");

          done();
        });
    });

    it("Should not Update a group", (done) => {
      const postId = "606321122a97e22fc4ce9b09";
      const body = {
        content: "First Group Content",
      };

      chai
        .request(server)
        .patch(`/groups/${groupId}`)
        .send(body)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");

          done();
        });
    });
  });

  describe("DELETE Single group", () => {
    it("Should Delete a group", (done) => {
      const postId = "606321122a97e22fc4ce9b08";

      chai
        .request(server)
        .delete(`/group/${groupId}`)
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });

    it("Should not Delete a group", (done) => {
      const postId = "606321122a97e22fc4ce9b09";

      chai
        .request(server)
        .delete(`/group/${groupId}`)
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });
});
