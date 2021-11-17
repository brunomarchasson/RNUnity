using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class cube : MonoBehaviour
{
    private int rotateX = 0;
    private int rotateY = 0;
    private int rotateZ = 0;
    // Use this for initialization
    void Awake()
    {
        Debug.Log("Awake");
        UnityMessageManager.Instance.OnRNMessage += onMessage;
    }

    void onDestroy()
    {
        UnityMessageManager.Instance.OnRNMessage -= onMessage;
    }

    void setXRotation(string val)
    {
        Debug.Log("setXRotation:" + val);
        rotateX = int.Parse(val);
    }

    void setYRotation(string val)
    {
        Debug.Log("setYRotation:" + val);
        rotateY = int.Parse(val);
    }

    void setZRotation(string val)
    {
        Debug.Log("setZRotation:" + val);
        rotateZ = int.Parse(val);
    }

    void onMessage(MessageHandler message)
    {
        Debug.Log("onMessage");
        var data = message.getData<string>();
        Debug.Log("onMessage:" + data);
        Debug.Log(message);
        // canRotate = !canRotate;
        message.send(new { CallbackTest = "I am Unity callback" });
    }


    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Rotate(rotateX, rotateY, rotateZ);
    }
}
