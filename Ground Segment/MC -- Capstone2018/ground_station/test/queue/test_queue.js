/*
* Some rudimentary tests for the queue routes.
*/
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiFiles = require('chai-files');
const fs = require('fs');
const p = require('path');
const server = require('../../server');
const should = chai.should();
const constants = require('../../constants');

chai.use(chaiHttp);
chai.use(chaiFiles);

const expect = chai.expect;
const file = chaiFiles.file;
const prevQueue = p.join(p.dirname(constants.CURR_QUEUE_PATH), 'prevqueue.json');

describe('Queue', () => {
    before((done) => {
        if (fs.existsSync(constants.CURR_QUEUE_PATH)){
            fs.rename(constants.CURR_QUEUE_PATH, prevQueue, (err) => {
                if (err) throw err;
            });
        }
        dataRestore = `${__dirname}/data/queue.json`;
        fs.copyFile(dataRestore, constants.CURR_QUEUE_PATH, (err) => {
            if (err) throw err;
        });
        done();
    });

    beforeEach((done) => {
        // Clear test backup dir
        var deleteFolderRecursive = function(path) {
            if (fs.existsSync(path)) {
              fs.readdirSync(path).forEach(function(file, index){
                var curPath = p.join(path, file);
                if (fs.lstatSync(curPath).isDirectory()) { // recurse
                  deleteFolderRecursive(curPath);
                } else { // delete file
                  fs.unlinkSync(curPath);
                }
              });
              fs.rmdirSync(path);
            }
          };
        deleteFolderRecursive(constants.QUEUE_BACKUP_DIR);
        fs.mkdirSync(constants.QUEUE_BACKUP_DIR);
        done();
    });

    afterEach((done) => {
        // Restore current queue to test dir
        if (!fs.existsSync(constants.CURR_QUEUE_PATH)) {
             dataRestore = `${__dirname}/data/queue.json`;
             fs.copyFile(dataRestore, constants.CURR_QUEUE_PATH, (err) => {
                 if (err) throw err;
             });
        }
        // Clear test backup dir
        var deleteFolderRecursive = function(path) {
            if (fs.existsSync(path)) {
              fs.readdirSync(path).forEach(function(file, index){
                var curPath = p.join(path, file);
                if (fs.lstatSync(curPath).isDirectory()) { // recurse
                  deleteFolderRecursive(curPath);
                } else { // delete file
                  fs.unlinkSync(curPath);
                }
              });
              fs.rmdirSync(path);
            }
          };
        deleteFolderRecursive(constants.QUEUE_BACKUP_DIR);
        fs.mkdirSync(constants.QUEUE_BACKUP_DIR);
        done();
    });

    after((done) => {
        // Restore old queue (if one)
        if (fs.existsSync(prevQueue)) {
            fs.unlinkSync(constants.CURR_QUEUE_PATH);
            fs.rename(prevQueue, constants.CURR_QUEUE_PATH, (err) => {
                if (err) throw err;
            });
        }
        done();
    });
    /*
    * Test queue GET.
    */
   describe('GET /queue', () => {
       it('Return current queue', (done) => {
           chai.request(server)
            .get('/queue')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('batch');
                res.body.batch.should.be.a('array');
                done();
            });
       });
       it('Error if no current queue', (done) => {
            if (fs.existsSync(constants.CURR_QUEUE_PATH)) {
                fs.unlink(constants.CURR_QUEUE_PATH, err => {
                    if (err) throw err;
                });
            }
            chai.request(server)
            .get('/queue')
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.have.property('errno');
                res.body.error.errno.should.be.eql(-2);
                res.body.error.should.have.property('code');
                res.body.error.code.should.be.eql('ENOENT');
                done();
            });
        });
   });
   
   /*
   * Test queue POST.
   */
  describe('POST /queue', () => {
      it('Error on POST due to invalid queue format', (done) => {
          let updateQueue = {
              id: 1,
              component:"blah",
              command: "Q",
              name: "fake name",
              defaultPriorityLevel: false,
              bandwidthUsage: 0.5,
              powerConsumption: 0.9
          };
          chai.request(server)
            .post('/queue')
            .send(updateQueue)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.not.have.property('batch');
                expect(file(constants.CURR_QUEUE_PATH)).to.exist;
                expect(file(constants.CURR_QUEUE_PATH)).to.equal(file(`${__dirname}/data/queue.json`));
                // TODO: add more shit to this when errors actually start returning properly
                done();
            });
      });

      it('POST without existing queue in current queue directory (new)', (done) => {
        let updateQueue = {
            batch:[
                {
                    id:1,
                    component:"blah",
                    command:"A",
                    name:"example name",
                    defaultPriorityLevel:true,
                    bandwidthUsage:0.5,
                    powerConsumption:0.9
                },
                {
                    id:2,
                    component:"boop",
                    command:"B",
                    name:"hola",
                    defaultPriorityLevel:true,
                    bandwidthUsage:0.5,
                    powerConsumption:0.9
                }
            ]
        };
        // Remove current queue
        if (fs.existsSync(constants.CURR_QUEUE_PATH)) {
            fs.unlink(constants.CURR_QUEUE_PATH, err => {
                if (err) throw err;
            });
        }
        chai.request(server)
        .post('/queue')
        .send(updateQueue)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('batch');
            res.body.batch.should.be.a('array');
            res.body.batch.should.have.length(2);
            done();
        });
      });

      it('POST with existing queue in current queue directory (update)', (done) => {
        let updateQueue = {
            batch:[
                {
                    id:1,
                    component:"blah",
                    command:"A",
                    name:"example name",
                    defaultPriorityLevel:true,
                    bandwidthUsage:0.5,
                    powerConsumption:0.9
                },
                {
                    id:2,
                    component:"boop",
                    command:"B",
                    name:"hola",
                    defaultPriorityLevel:true,
                    bandwidthUsage:0.5,
                    powerConsumption:0.9
                },
                {
                    id:3,
                    component:"hi",
                    command:"C",
                    name:"clock",
                    defaultPriorityLevel:false,
                    bandwidthUsage:0.2,
                    powerConsumption:1.7
                }
            ]
        };

        chai.request(server)
        .post('/queue')
        .send(updateQueue)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('batch');
            res.body.batch.should.be.a('array');
            res.body.batch.should.have.length(3);
            done();
        });
      });
  });
});